import { OrgMemberData } from './OrgMemberData';
import { OrgResponse } from './OrgResponse';


type Member = OrgMemberData
type Role = ("ADMIN" | "MEMBER")
type Org = OrgResponse

export interface OrgMemberResponse {
createdAt: string
updatedAt: string
orgId: number
userId: number
member?: Member
role: Role
isEnabled: boolean
org?: Org
createdById: number
updatedById: (number | null)
}
