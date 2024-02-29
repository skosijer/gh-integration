import { BaseHTTPError } from './base';
export default class TooManyRequests extends BaseHTTPError {
    constructor(detail = '', retryAfter = null) {
        super(detail);
        this.statusCode = 429;
        this.title = 'Too Many Requests';
        this.retryAfter = retryAfter;
    }
}
//# sourceMappingURL=TooManyRequests.js.map