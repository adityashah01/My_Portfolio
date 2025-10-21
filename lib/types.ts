/**
 * Database types and interfaces
 */

export interface User {
  id: number
  email: string
  name: string
  created_at: Date
  updated_at: Date
}

export interface DatabaseConfig {
  host: string
  port: number
  database: string
  user: string
  password: string
  ssl?: boolean
}

export interface QueryOptions {
  timeout?: number
  maxRetries?: number
}

export type DatabaseError = {
  code: string
  message: string
  detail?: string
}
