

export interface EventResponse {
id: number
eventType: EventType
description: string
}
interface EventType {
[k: string]: unknown
}
