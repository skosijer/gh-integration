import { BaseHTTPError } from './base';
export default class HttpVersionNotSupported extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 505;
        this.title = 'HTTP Version Not Supported';
    }
}
//# sourceMappingURL=HttpVersionNotSupported.js.map