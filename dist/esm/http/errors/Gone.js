import { BaseHTTPError } from './base';
export default class Gone extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 410;
        this.title = 'Gone';
    }
}
//# sourceMappingURL=Gone.js.map