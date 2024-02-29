import { BaseHTTPError } from './base';
export default class UnavailableForLegalReasons extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 451;
        this.title = 'Unavailable For Legal Reasons';
    }
}
//# sourceMappingURL=UnavailableForLegalReasons.js.map