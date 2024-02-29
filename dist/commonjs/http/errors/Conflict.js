"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Conflict extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 409;
        this.title = 'Conflict';
    }
}
exports.default = Conflict;
//# sourceMappingURL=Conflict.js.map