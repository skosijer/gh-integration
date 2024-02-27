import { InvitationResponse } from './InvitationResponse';


export interface PaginatedOrgInvitesResponse {
count: number
pages: number
data: InvitationResponse[]
}
