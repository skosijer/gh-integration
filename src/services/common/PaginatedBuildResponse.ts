import { BuildResponse } from './BuildResponse';


export interface PaginatedBuildResponse {
count: number
pages: number
data: BuildResponse[]
}
