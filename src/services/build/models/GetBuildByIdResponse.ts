import { ArtifactResponse } from '../../common/ArtifactResponse';
import { TagResponse } from '../../common/TagResponse';
import { BuildUser } from '../../common/BuildUser';


type Status = ("SUCCESS" | "IN_PROGRESS" | "FAILURE")
type User = BuildUser

export interface GetBuildByIdResponse {
id: number
createdAt: string
updatedAt: string
status: Status
startTime: string
endTime: (string | null)
apiId: number
buildType: ("SNIPPETS" | "DOC" | "SDK")[]
artifacts?: ArtifactResponse[]
tags?: TagResponse[]
createdById: number
updatedById: (number | null)
duration: (number | null)
buildLabel: string
/**
 * Major version number
 */
major?: number
/**
 * Minor version number
 */
minor?: number
/**
 * Patch version number
 */
patch?: number
/**
 * Prerelease tag of the version number
 */
tag?: string
/**
 * api's openAPI spec
 */
specUrl: string
user?: User
}
