"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class LengthRequired extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 411;
        this.title = 'LengthRequired';
    }
}
exports.default = LengthRequired;
//# sourceMappingURL=LengthRequired.js.map