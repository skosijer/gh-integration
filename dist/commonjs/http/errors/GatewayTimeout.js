"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class GatewayTimeout extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 504;
        this.title = 'Gateway Timeout';
    }
}
exports.default = GatewayTimeout;
//# sourceMappingURL=GatewayTimeout.js.map