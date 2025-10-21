import { query, transaction } from "./db"
import type { PoolClient } from "pg"

/**
 * Check if database connection is healthy
 */
export async function checkDatabaseHealth(): Promise<boolean> {
  try {
    const result = await query("SELECT NOW()")
    return result.rows.length > 0
  } catch (error) {
    console.error("[v0] Database health check failed", error)
    return false
  }
}

/**
 * Get database version
 */
export async function getDatabaseVersion(): Promise<string> {
  try {
    const result = await query("SELECT version()")
    return result.rows[0].version
  } catch (error) {
    console.error("[v0] Failed to get database version", error)
    return "Unknown"
  }
}

/**
 * Example: Create a users table
 */
export async function createUsersTable(): Promise<void> {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      name VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `

  await query(createTableQuery)
  console.log("[v0] Users table created or already exists")
}

/**
 * Example: Insert a user with transaction
 */
export async function createUser(email: string, name: string): Promise<number> {
  return transaction(async (client: PoolClient) => {
    const insertQuery = `
      INSERT INTO users (email, name)
      VALUES ($1, $2)
      RETURNING id
    `
    const result = await client.query(insertQuery, [email, name])
    return result.rows[0].id
  })
}

/**
 * Example: Get all users
 */
export async function getAllUsers(): Promise<Array<{ id: number; email: string; name: string }>> {
  const result = await query("SELECT id, email, name FROM users ORDER BY created_at DESC")
  return result.rows
}

/**
 * Example: Get user by ID
 */
export async function getUserById(id: number): Promise<{ id: number; email: string; name: string } | null> {
  const result = await query("SELECT id, email, name FROM users WHERE id = $1", [id])
  return result.rows[0] || null
}

/**
 * Example: Update user
 */
export async function updateUser(id: number, name: string): Promise<boolean> {
  const result = await query("UPDATE users SET name = $1, updated_at = CURRENT_TIMESTAMP WHERE id = $2", [name, id])
  return (result.rowCount ?? 0) > 0
}

/**
 * Example: Delete user
 */
export async function deleteUser(id: number): Promise<boolean> {
  const result = await query("DELETE FROM users WHERE id = $1", [id])
  return (result.rowCount ?? 0) > 0
}
