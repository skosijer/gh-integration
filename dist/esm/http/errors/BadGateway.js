import { BaseHTTPError } from './base';
export default class BadGateway extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 502;
        this.title = 'Bad Gateway';
    }
}
//# sourceMappingURL=BadGateway.js.map