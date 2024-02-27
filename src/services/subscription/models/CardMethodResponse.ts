import { CardResponse } from './CardResponse';


type Card = CardResponse
type Type_ = "card"

export interface CardMethodResponse {
card: Card
type_: Type_
}
