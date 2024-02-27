

export interface AddressResponse {
/**
 * City, district, suburb, town, or village.
 */
city: string
/**
 * Two-letter country code (ISO 3166-1 alpha-2)
 */
country: string
/**
 * Address line 1 (e.g., street, PO Box, or company name)
 */
line1: string
/**
 * Address line 2 (e.g., apartment, suite, unit, or building)
 */
line2?: string
/**
 * ZIP or postal code
 */
postalCode: string
/**
 * State, county, province, or region.
 */
state?: string
}
