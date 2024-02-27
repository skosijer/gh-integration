import { TagResponse } from './TagResponse';


type Language = ("JAVA" | "PYTHON" | "TYPESCRIPT" | "CSHARP" | "GO" | "TERRAFORM")

export interface SdkResponse {
id: number
createdAt: string
updatedAt: string
language: Language
fileLocation: string
version: string
artifactId: number
createdById: number
updatedById: (number | null)
tags?: TagResponse[]
major: number
minor: number
patch: number
tag: (string | null)
}
