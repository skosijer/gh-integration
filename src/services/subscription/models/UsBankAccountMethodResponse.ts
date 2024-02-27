import { BankAccountResponse } from './BankAccountResponse';


type UsBankAccount = BankAccountResponse
type Type_ = "us_bank_account"

export interface UsBankAccountMethodResponse {
usBankAccount: UsBankAccount
type_: Type_
}
