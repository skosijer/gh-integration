import { BaseHTTPError } from './base';
export default class Locked extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 423;
        this.title = 'Locked';
    }
}
//# sourceMappingURL=Locked.js.map