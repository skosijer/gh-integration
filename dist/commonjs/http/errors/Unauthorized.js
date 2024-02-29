"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Unauthorized extends base_1.BaseHTTPError {
    constructor(detail = '', wwwAuthenticate) {
        super(detail);
        this.statusCode = 401;
        this.title = 'Unauthorized';
        this.wwwAuthenticate = wwwAuthenticate;
    }
}
exports.default = Unauthorized;
//# sourceMappingURL=Unauthorized.js.map