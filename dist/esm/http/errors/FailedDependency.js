import { BaseHTTPError } from './base';
export default class FailedDependency extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 424;
        this.title = 'Failed Dependency';
    }
}
//# sourceMappingURL=FailedDependency.js.map