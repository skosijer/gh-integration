

type SignupMethod = ("GOOGLE" | "DEFAULT")

export interface CreateUserRequest {
email: string
password: string
firstName?: string
signupMethod: SignupMethod
lastName?: string
auth0Id: string
}
