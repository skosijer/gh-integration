import { BaseHTTPError } from './base';
export default class NetworkAuthenticationRequired extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 511;
        this.title = 'Network Authentication Required';
    }
}
//# sourceMappingURL=NetworkAuthenticationRequired.js.map