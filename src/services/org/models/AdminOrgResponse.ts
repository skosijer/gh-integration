

export interface AdminOrgResponse {
id: number
createdAt: string
updatedAt: string
name: string
description: (string | null)
website: string
domain: string
slug: string
isAllowedForBeta: boolean
logoUrl: (string | null)
createdById: number
updatedById: (number | null)
buildsCount: number
membersCount: number
}
