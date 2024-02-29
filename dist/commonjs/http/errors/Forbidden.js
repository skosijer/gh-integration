"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Forbidden extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 403;
        this.title = 'Forbidden';
    }
}
exports.default = Forbidden;
//# sourceMappingURL=Forbidden.js.map