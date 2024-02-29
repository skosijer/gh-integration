import { BaseHTTPError } from './base';
export default class Conflict extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 409;
        this.title = 'Conflict';
    }
}
//# sourceMappingURL=Conflict.js.map