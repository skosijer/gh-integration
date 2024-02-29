"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class ProxyAuthenticationRequired extends base_1.BaseHTTPError {
    constructor(detail = '', proxyAuthenticate) {
        super(detail);
        this.statusCode = 407;
        this.title = 'Proxy Authentication Required';
        this.proxyAuthenticate = proxyAuthenticate;
    }
}
exports.default = ProxyAuthenticationRequired;
//# sourceMappingURL=ProxyAuthenticationRequired.js.map