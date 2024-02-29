"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class InternalServerError extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 500;
        this.title = 'Internal Server Error';
    }
}
exports.default = InternalServerError;
//# sourceMappingURL=InternalServerError.js.map