import { BaseHTTPError } from './base';
export default class PayloadTooLarge extends BaseHTTPError {
    constructor(detail = '', retryAfter = null) {
        super(detail);
        this.statusCode = 413;
        this.title = 'Payload Too Large';
        this.retryAfter = retryAfter;
    }
}
//# sourceMappingURL=PayloadTooLarge.js.map