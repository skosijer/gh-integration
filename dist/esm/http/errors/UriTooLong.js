import { BaseHTTPError } from './base';
export default class UriTooLong extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 414;
        this.title = 'URI Too Long';
    }
}
//# sourceMappingURL=UriTooLong.js.map