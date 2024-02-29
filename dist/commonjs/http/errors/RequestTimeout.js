"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class RequestTimeout extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 408;
        this.title = 'Request Timeout';
    }
}
exports.default = RequestTimeout;
//# sourceMappingURL=RequestTimeout.js.map