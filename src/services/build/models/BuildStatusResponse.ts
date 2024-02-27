

type Status = ("SUCCESS" | "IN_PROGRESS" | "FAILURE")

export interface BuildStatusResponse {
status: Status
}
