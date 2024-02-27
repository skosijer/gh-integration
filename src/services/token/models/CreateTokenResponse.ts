

export interface CreateTokenResponse {
id: number
name: string
/**
 * Warning: only shown once, please save securely
 */
token: string
/**
 * Defaults to 1 year from creation date
 */
expiresAt: string
}
