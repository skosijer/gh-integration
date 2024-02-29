"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class NetworkAuthenticationRequired extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 511;
        this.title = 'Network Authentication Required';
    }
}
exports.default = NetworkAuthenticationRequired;
//# sourceMappingURL=NetworkAuthenticationRequired.js.map