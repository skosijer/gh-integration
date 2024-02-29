import { BaseHTTPError } from './base';
export default class InternalServerError extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 500;
        this.title = 'Internal Server Error';
    }
}
//# sourceMappingURL=InternalServerError.js.map