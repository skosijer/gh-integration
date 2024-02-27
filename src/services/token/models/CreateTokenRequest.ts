

export interface CreateTokenRequest {
name: string
scope: ("SDK" | "DOC" | "BUILD" | "API" | "ARTIFACT" | "ORG")[]
expiresAt?: string
}
