

export interface ValidateSpecResponse {
isValidated: boolean
diagnostics: {
[k: string]: unknown
}[]
}
