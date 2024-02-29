import { BaseHTTPError } from './base';
export default class PaymentRequired extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=PaymentRequired.d.ts.map