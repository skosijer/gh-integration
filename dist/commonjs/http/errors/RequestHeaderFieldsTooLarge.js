"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class RequestHeaderFieldsTooLarge extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 431;
        this.title = 'Request Header Fields Too Large';
    }
}
exports.default = RequestHeaderFieldsTooLarge;
//# sourceMappingURL=RequestHeaderFieldsTooLarge.js.map