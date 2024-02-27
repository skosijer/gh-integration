

export interface GetTokenResponse {
id: number
name: string
expiresAt: string
scope: ("SDK" | "DOC" | "BUILD" | "API" | "ARTIFACT" | "ORG")[]
}
