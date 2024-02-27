import { GetUsersFilters } from './GetUsersFilters';
import { AdminGetUserResponse } from './AdminGetUserResponse';


type Filters = GetUsersFilters

export interface UsersResponse {
count: number
pages: number
filters: Filters
data: AdminGetUserResponse[]
}
