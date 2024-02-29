"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class ServiceUnavailable extends base_1.BaseHTTPError {
    constructor(detail = '', retryAfter = null) {
        super(detail);
        this.statusCode = 503;
        this.title = 'Service Unavailable';
        this.retryAfter = retryAfter;
    }
}
exports.default = ServiceUnavailable;
//# sourceMappingURL=ServiceUnavailable.js.map