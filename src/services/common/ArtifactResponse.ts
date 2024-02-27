import { DocResponse } from './DocResponse';
import { SdkResponse } from './SdkResponse';


type ArtifactType = ("SDK" | "DOC" | "LOG" | "ZIP" | "ENRICHED_SPEC")
type Doc = DocResponse
type Sdk = SdkResponse
type Status = ("IN_PROGRESS" | "FAIL" | "SUCCESS")

export interface ArtifactResponse {
id: number
createdAt: string
updatedAt: string
artifactType: ArtifactType
artifactUrl?: string
buildId: number
doc?: Doc
sdk?: Sdk
status: Status
error: (string | null)
createdById: number
updatedById: (number | null)
isApproved: boolean
}
