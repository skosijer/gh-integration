import { AdminOrgResponse } from './AdminOrgResponse';


export interface AdminPaginatedOrgResponse {
count: number
pages: number
data: AdminOrgResponse[]
}
