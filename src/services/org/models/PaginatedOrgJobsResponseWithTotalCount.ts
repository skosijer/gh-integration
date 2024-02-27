import { JobResponse } from './JobResponse';


export interface PaginatedOrgJobsResponseWithTotalCount {
total: number
data: JobResponse[]
count: number
pages: number
}
