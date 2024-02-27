

type Status = ("IN_PROGRESS" | "FAIL" | "SUCCESS")
type Type_ = ("JAVA" | "PYTHON" | "TYPESCRIPT" | "CSHARP" | "GO" | "TERRAFORM" | "DOC")

export interface JobResponse {
buildId: number
startTime: string
endTime: string
status: Status
type_: Type_
}
