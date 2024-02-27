import { ArtifactResponse } from '../../common/ArtifactResponse';


export interface PaginatedOrgArtifactsResponse {
count: number
pages: number
data: ArtifactResponse[]
}
