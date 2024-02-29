import { BaseHTTPError } from './base';
export default class UnprocessableEntity extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 422;
        this.title = 'Unprocessable Entity';
    }
}
//# sourceMappingURL=UnprocessableEntity.js.map