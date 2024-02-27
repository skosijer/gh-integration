

export interface ApiResponse {
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
uploadedSpecId: number
uploadedSpec: UploadedSpec
}
interface UploadedSpec {
[k: string]: unknown
}
