"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class BadRequest extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 400;
        this.title = 'Bad Request';
    }
}
exports.default = BadRequest;
//# sourceMappingURL=BadRequest.js.map