import { BaseHTTPError } from './base';
export default class NotImplemented extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 501;
        this.title = 'Not Implemented';
    }
}
//# sourceMappingURL=NotImplemented.js.map