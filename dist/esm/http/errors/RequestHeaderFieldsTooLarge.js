import { BaseHTTPError } from './base';
export default class RequestHeaderFieldsTooLarge extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 431;
        this.title = 'Request Header Fields Too Large';
    }
}
//# sourceMappingURL=RequestHeaderFieldsTooLarge.js.map