import { BaseHTTPError } from './base';
export default class RequestTimeout extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 408;
        this.title = 'Request Timeout';
    }
}
//# sourceMappingURL=RequestTimeout.js.map