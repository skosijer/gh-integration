import { BuildWithJobsResponse } from './BuildWithJobsResponse';
import { OrgBuildsFilters } from './OrgBuildsFilters';


type Filters = OrgBuildsFilters

export interface PaginatedOrgBuildsWithJobsResponseWithTotalCount {
total: number
data: BuildWithJobsResponse[]
count: number
pages: number
filters: Filters
}
