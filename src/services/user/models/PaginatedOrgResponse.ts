import { OrgResponse } from '../../common/OrgResponse';


export interface PaginatedOrgResponse {
count: number
pages: number
data: OrgResponse[]
}
