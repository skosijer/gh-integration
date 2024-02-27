import { GetApisFilters } from './GetApisFilters';
import { ApiSearchResponse } from './ApiSearchResponse';


type Filters = GetApisFilters

export interface ApisSearchPaginatedResponse {
count: number
pages: number
filters: Filters
data: ApiSearchResponse[]
}
