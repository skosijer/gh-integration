"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class HttpVersionNotSupported extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 505;
        this.title = 'HTTP Version Not Supported';
    }
}
exports.default = HttpVersionNotSupported;
//# sourceMappingURL=HttpVersionNotSupported.js.map