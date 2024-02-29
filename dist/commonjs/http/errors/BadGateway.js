"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class BadGateway extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 502;
        this.title = 'Bad Gateway';
    }
}
exports.default = BadGateway;
//# sourceMappingURL=BadGateway.js.map