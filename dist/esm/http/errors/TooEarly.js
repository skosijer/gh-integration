import { BaseHTTPError } from './base';
export default class TooEarly extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 425;
        this.title = 'Too Early';
    }
}
//# sourceMappingURL=TooEarly.js.map