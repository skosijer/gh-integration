import { SdkResponse } from './SdkResponse';


export interface PaginatedSdkResponse {
count: number
pages: number
data: SdkResponse[]
}
