"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class VariantAlsoNegotiates extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 506;
        this.title = 'Variant Also Negotiates';
    }
}
exports.default = VariantAlsoNegotiates;
//# sourceMappingURL=VariantAlsoNegotiates.js.map