import { Pool, type PoolClient, type QueryResult, type QueryResultRow } from "pg"

// PostgreSQL connection pool
let pool: Pool | null = null

/**
 * Get or create a PostgreSQL connection pool
 */
export function getPool(): Pool {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
      max: 20, // Maximum number of clients in the pool
      idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
      connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
    })

    // Handle pool errors
    pool.on("error", (err) => {
      console.error("[v0] Unexpected error on idle PostgreSQL client", err)
      process.exit(-1)
    })
  }

  return pool
}

/**
 * Execute a query with automatic connection management
 */
export async function query<T extends QueryResultRow = any>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> {
  const pool = getPool()
  const start = Date.now()

  try {
    const result = await pool.query<T>(text, params)
    const duration = Date.now() - start
    console.log("[v0] Executed query", { text, duration, rows: result.rowCount })
    return result
  } catch (error) {
    console.error("[v0] Database query error", { text, error })
    throw error
  }
}

/**
 * Get a client from the pool for transactions
 */
export async function getClient(): Promise<PoolClient> {
  const pool = getPool()
  const client = await pool.connect()
  return client
}

/**
 * Execute a transaction with automatic rollback on error
 */
export async function transaction<T>(callback: (client: PoolClient) => Promise<T>): Promise<T> {
  const client = await getClient()

  try {
    await client.query("BEGIN")
    const result = await callback(client)
    await client.query("COMMIT")
    return result
  } catch (error) {
    await client.query("ROLLBACK")
    console.error("[v0] Transaction error, rolled back", error)
    throw error
  } finally {
    client.release()
  }
}

/**
 * Close the connection pool (useful for cleanup)
 */
export async function closePool(): Promise<void> {
  if (pool) {
    await pool.end()
    pool = null
    console.log("[v0] PostgreSQL pool closed")
  }
}
