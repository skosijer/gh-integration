import { OrgAndRoleMemberResponse } from '../../common/OrgAndRoleMemberResponse';


type SignupMethod = ("GOOGLE" | "DEFAULT")

export interface AdminGetUserResponse {
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
buildsCount: number
isSubscribedToEmails: boolean
auth0Id: string
}
