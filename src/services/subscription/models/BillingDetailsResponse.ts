import { AddressResponse } from './AddressResponse';
import { CardMethodResponse } from './CardMethodResponse';
import { UsBankAccountMethodResponse } from './UsBankAccountMethodResponse';


type BillingAddress = AddressResponse
type PaymentMethod = (CardMethodResponse | UsBankAccountMethodResponse)

export interface BillingDetailsResponse {
name: string
billingAddress: BillingAddress
paymentMethod: PaymentMethod
}
