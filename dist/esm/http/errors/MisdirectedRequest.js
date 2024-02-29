import { BaseHTTPError } from './base';
export default class MisdirectedRequest extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 421;
        this.title = 'Misdirected Request';
    }
}
//# sourceMappingURL=MisdirectedRequest.js.map