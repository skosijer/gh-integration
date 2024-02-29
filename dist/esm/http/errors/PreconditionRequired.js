import { BaseHTTPError } from './base';
export default class PreconditionRequired extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 428;
        this.title = 'Precondition Required';
    }
}
//# sourceMappingURL=PreconditionRequired.js.map