

export interface CreateBuildRequest {
apiId: number
hooks?: import('fs').ReadStream | Buffer | File
customQueries?: import('fs').ReadStream | Buffer | File
baseUrl?: string
sdkName: string
sdkVersion: string
liblabVersion?: string
deliveryMethods: ("files" | "zip" | "tar" | "github" | "json" | "none")[]
languages: ("java" | "python" | "typescript" | "csharp" | "go" | "terraform")[]
buildType: ("SNIPPETS" | "DOC" | "SDK")[]
params?: string
}
