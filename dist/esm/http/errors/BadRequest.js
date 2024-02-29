import { BaseHTTPError } from './base';
export default class BadRequest extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 400;
        this.title = 'Bad Request';
    }
}
//# sourceMappingURL=BadRequest.js.map