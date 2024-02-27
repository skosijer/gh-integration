

type Currency = "usd"
type Interval = ("month" | "year")

export interface SubscriptionPriceResponse {
amount: number
currency: Currency
interval: Interval
renewsAt: string
}
