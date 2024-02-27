

type Language = ("JAVA" | "PYTHON" | "TYPESCRIPT" | "CSHARP" | "GO" | "TERRAFORM")

export interface CreateSdkRequest {
language: Language
fileLocation: string
version: string
artifactId: number
}
