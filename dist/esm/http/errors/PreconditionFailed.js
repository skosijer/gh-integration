import { BaseHTTPError } from './base';
export default class PreconditionFailed extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 412;
        this.title = 'PreconditionFailed';
    }
}
//# sourceMappingURL=PreconditionFailed.js.map