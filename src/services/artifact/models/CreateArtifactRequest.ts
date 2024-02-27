

type ArtifactType = ("SDK" | "DOC" | "LOG" | "ZIP" | "ENRICHED_SPEC")
type Status = ("IN_PROGRESS" | "FAIL" | "SUCCESS")

export interface CreateArtifactRequest {
artifactType: ArtifactType
buildId: number
status?: Status
bucketName: string
bucketKey: string
}
