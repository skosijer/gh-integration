import { BaseHTTPError } from './base';
export default class UpgradeRequired extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 426;
        this.title = 'Upgrade Required';
    }
}
//# sourceMappingURL=UpgradeRequired.js.map