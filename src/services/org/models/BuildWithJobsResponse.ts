import { JobResponse } from './JobResponse';
import { BuildUser } from '../../common/BuildUser';


type Status = ("SUCCESS" | "IN_PROGRESS" | "FAILURE")
type User = BuildUser

export interface BuildWithJobsResponse {
buildNumber: number
duration: (number | null)
startTime: string
endTime: string
updatedAt: string
createdById: number
apiVersion: string
apiName: string
status: Status
apiSlug: string
id: number
jobs: JobResponse[]
user: User
}
