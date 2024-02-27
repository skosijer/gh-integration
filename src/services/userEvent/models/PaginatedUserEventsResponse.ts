import { GetEventsFilters } from './GetEventsFilters';
import { UserEventsResponse } from './UserEventsResponse';


type Filters = GetEventsFilters

export interface PaginatedUserEventsResponse {
count: number
pages: number
filters?: Filters
data: UserEventsResponse[]
}
