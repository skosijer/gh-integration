import { BaseHTTPError } from './base';
export default class ExpectationFailed extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 417;
        this.title = 'Expectation Failed';
    }
}
//# sourceMappingURL=ExpectationFailed.js.map