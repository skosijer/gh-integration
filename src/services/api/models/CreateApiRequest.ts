

export interface CreateApiRequest {
name: string
version: string
orgId?: number
spec: import('fs').ReadStream | Buffer | File
}
