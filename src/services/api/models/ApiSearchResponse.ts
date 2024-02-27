

export interface ApiSearchResponse {
id: number
createdAt: string
updatedAt: string
name: string
slug: string
version: string
orgId: number
approvedDocId: (number | null)
createdById: number
updatedById: (number | null)
latestBuildAt: string
org: Org
uploadedSpecId: number
uploadedSpec: UploadedSpec
}
interface Org {
name?: string
}
interface UploadedSpec {
[k: string]: unknown
}
