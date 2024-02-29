import { BaseHTTPError } from './base';
export default class ServiceUnavailable extends BaseHTTPError {
    constructor(detail = '', retryAfter = null) {
        super(detail);
        this.statusCode = 503;
        this.title = 'Service Unavailable';
        this.retryAfter = retryAfter;
    }
}
//# sourceMappingURL=ServiceUnavailable.js.map