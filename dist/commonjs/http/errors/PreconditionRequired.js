"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class PreconditionRequired extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 428;
        this.title = 'Precondition Required';
    }
}
exports.default = PreconditionRequired;
//# sourceMappingURL=PreconditionRequired.js.map