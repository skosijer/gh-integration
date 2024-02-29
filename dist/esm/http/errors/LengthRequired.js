import { BaseHTTPError } from './base';
export default class LengthRequired extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 411;
        this.title = 'LengthRequired';
    }
}
//# sourceMappingURL=LengthRequired.js.map