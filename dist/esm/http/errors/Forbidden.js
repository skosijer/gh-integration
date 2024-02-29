import { BaseHTTPError } from './base';
export default class Forbidden extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 403;
        this.title = 'Forbidden';
    }
}
//# sourceMappingURL=Forbidden.js.map