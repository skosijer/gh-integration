import { OrgResponse } from './OrgResponse';


type Role = ("ADMIN" | "MEMBER")
type Org = OrgResponse

export interface OrgAndRoleMemberResponse {
role: Role
org?: Org
}
