import { BaseHTTPError } from './base';
export default class NotFound extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 404;
        this.title = 'Not Found';
    }
}
//# sourceMappingURL=NotFound.js.map