import { BaseHTTPError } from './base';
export default class UnsufficientStorage extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 507;
        this.title = 'Unsufficient Storage';
    }
}
//# sourceMappingURL=UnsufficientStorage.js.map