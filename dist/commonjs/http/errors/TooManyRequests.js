"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class TooManyRequests extends base_1.BaseHTTPError {
    constructor(detail = '', retryAfter = null) {
        super(detail);
        this.statusCode = 429;
        this.title = 'Too Many Requests';
        this.retryAfter = retryAfter;
    }
}
exports.default = TooManyRequests;
//# sourceMappingURL=TooManyRequests.js.map