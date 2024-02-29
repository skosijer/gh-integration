import { BaseHTTPError } from './base';
export default class RangeNotSatisfiable extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 416;
        this.title = 'Range Not Satisfiable';
    }
}
//# sourceMappingURL=RangeNotSatisfiable.js.map