

type Role = ("ADMIN" | "MEMBER")

export interface CreateOrgMemberRequest {
userId: number
role: Role
}
