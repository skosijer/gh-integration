import { BaseHTTPError } from './base';
export default class MethodNotAllowed extends BaseHTTPError {
    constructor(detail = '', allow) {
        super(detail);
        this.statusCode = 405;
        this.title = 'Method Not Allowed';
        this.allow = allow;
    }
}
//# sourceMappingURL=MethodNotAllowed.js.map