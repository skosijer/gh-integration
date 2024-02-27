import { EventResponse } from './EventResponse';
import { UserResponse } from '../../common/UserResponse';


type Event = EventResponse
type User = UserResponse

export interface UserEventsResponse {
id: number
userId: number
eventId: number
event: Event
user: User
orgId: (number | null)
timestamp: string
eventData: (string | null)
createdById: (number | null)
updatedById: (number | null)
}
