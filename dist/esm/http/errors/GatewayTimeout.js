import { BaseHTTPError } from './base';
export default class GatewayTimeout extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 504;
        this.title = 'Gateway Timeout';
    }
}
//# sourceMappingURL=GatewayTimeout.js.map