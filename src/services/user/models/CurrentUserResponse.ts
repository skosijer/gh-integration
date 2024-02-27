import { OrgAndRoleMemberResponse } from '../../common/OrgAndRoleMemberResponse';


type SignupMethod = ("GOOGLE" | "DEFAULT")
type Role = ("ADMIN" | "MEMBER")

export interface CurrentUserResponse {
id: number
createdAt: string
signupMethod: SignupMethod
updatedAt: string
email: string
firstName: (string | null)
lastName: (string | null)
isLiblabAdmin: boolean
isEnabled: boolean
orgs?: OrgAndRoleMemberResponse[]
role: Role
isSubscribedToEmails: boolean
auth0Id: string
}
