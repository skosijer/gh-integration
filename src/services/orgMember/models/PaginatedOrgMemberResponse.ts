import { OrgMemberResponse } from '../../common/OrgMemberResponse';


export interface PaginatedOrgMemberResponse {
count: number
pages: number
data: OrgMemberResponse[]
}
