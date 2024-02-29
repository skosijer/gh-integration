import { BaseHTTPError } from './base';
export default class VariantAlsoNegotiates extends BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 506;
        this.title = 'Variant Also Negotiates';
    }
}
//# sourceMappingURL=VariantAlsoNegotiates.js.map