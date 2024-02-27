

export interface OrgBuildsFilters {
statuses?: ("SUCCESS" | "IN_PROGRESS" | "FAILURE")[]
createdByIds: number[]
versions: string[]
}
