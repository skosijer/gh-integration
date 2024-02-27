import { BuildWithJobsResponse } from './BuildWithJobsResponse';


export interface OrgBuildsGroupedByApiSlugResponse {
slug: string
name: string
builds: BuildWithJobsResponse[]
count: number
}
