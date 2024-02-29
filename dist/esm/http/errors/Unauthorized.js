import { BaseHTTPError } from './base';
export default class Unauthorized extends BaseHTTPError {
    constructor(detail = '', wwwAuthenticate) {
        super(detail);
        this.statusCode = 401;
        this.title = 'Unauthorized';
        this.wwwAuthenticate = wwwAuthenticate;
    }
}
//# sourceMappingURL=Unauthorized.js.map