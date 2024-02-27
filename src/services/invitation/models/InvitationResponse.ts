import { InviteUserResponse } from './InviteUserResponse';
import { InviteOrgResponse } from './InviteOrgResponse';


type Inviter = InviteUserResponse
type Org = InviteOrgResponse
/**
 * Status of the invitation
 */
type Status = ("PENDING" | "REDEEMED" | "ACCEPTED" | "EXPIRED" | "DECLINED" | "REVOKED")

export interface InvitationResponse {
/**
 * Invitation ID
 */
id: number
inviter: Inviter
recipientId: (number | null)
org: Org
status: Status
/**
 * Email of the invited member
 */
email: string
message: (string | null)
createdAt: string
updatedAt: string
}
