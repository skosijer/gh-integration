import { BaseHTTPError } from './base';
export default class PaymentRequired extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 402;
        this.title = 'Payment Required';
    }
}
//# sourceMappingURL=PaymentRequired.js.map