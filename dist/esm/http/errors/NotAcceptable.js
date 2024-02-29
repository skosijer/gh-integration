import { BaseHTTPError } from './base';
export default class NotAcceptable extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 406;
        this.title = 'Not Acceptable';
    }
}
//# sourceMappingURL=NotAcceptable.js.map