import { DocResponse } from './DocResponse';


export interface PaginatedDocResponse {
count: number
pages: number
data: DocResponse[]
}
