import { PlanResponse } from '../../common/PlanResponse';
import { SubscriptionPriceResponse } from './SubscriptionPriceResponse';
import { BillingDetailsResponse } from './BillingDetailsResponse';


type Plan = PlanResponse
type Price = SubscriptionPriceResponse
type BillingDetails = BillingDetailsResponse

export interface SubscriptionResponse {
id: number
orgId: number
plan: Plan
price: Price
billingDetails: BillingDetails
isFreeTier: boolean
}
