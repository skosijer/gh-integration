import { OrgAndRoleMemberResponse } from './OrgAndRoleMemberResponse';


type SignupMethod = ("GOOGLE" | "DEFAULT")

export interface UserResponse {
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
isSubscribedToEmails: boolean
auth0Id: string
}
