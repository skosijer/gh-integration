

type Role = ("ADMIN" | "MEMBER")

export interface UpdateOrgMemberRequest {
role?: Role
orgId?: number
}
