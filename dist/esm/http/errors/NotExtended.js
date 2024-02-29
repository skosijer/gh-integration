import { BaseHTTPError } from './base';
export default class NotExtended extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 510;
        this.title = 'Not Extended';
    }
}
//# sourceMappingURL=NotExtended.js.map