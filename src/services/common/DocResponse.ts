import { TagResponse } from './TagResponse';


export interface DocResponse {
id: number
createdAt: string
updatedAt: string
fileLocation: string
version: string
artifactId: number
buildId?: number
previewSlug: (string | null)
previewUrl?: (string | null)
approvedDocUrl?: (string | null)
createdById: number
updatedById: (number | null)
tags?: TagResponse[]
major: number
minor: number
patch: number
tag?: (string | null)
}
