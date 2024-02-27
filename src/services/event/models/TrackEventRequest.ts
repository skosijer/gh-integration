

export interface TrackEventRequest {
name: string
metadata?: Metadata
userToken?: string
}
interface Metadata {
[k: string]: unknown
}
