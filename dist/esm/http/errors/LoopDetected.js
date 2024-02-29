import { BaseHTTPError } from './base';
export default class LoopDetected extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 508;
        this.title = 'Loop Detected';
    }
}
//# sourceMappingURL=LoopDetected.js.map