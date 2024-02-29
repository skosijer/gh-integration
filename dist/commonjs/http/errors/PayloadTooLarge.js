"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class PayloadTooLarge extends base_1.BaseHTTPError {
    constructor(detail = '', retryAfter = null) {
        super(detail);
        this.statusCode = 413;
        this.title = 'Payload Too Large';
        this.retryAfter = retryAfter;
    }
}
exports.default = PayloadTooLarge;
//# sourceMappingURL=PayloadTooLarge.js.map