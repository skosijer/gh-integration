import { BaseHTTPError } from './base';
export default class UnsupportedMediaType extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 415;
        this.title = 'Unsupported Media Type';
    }
}
//# sourceMappingURL=UnsupportedMediaType.js.map