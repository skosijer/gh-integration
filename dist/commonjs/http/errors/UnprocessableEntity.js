"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class UnprocessableEntity extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 422;
        this.title = 'Unprocessable Entity';
    }
}
exports.default = UnprocessableEntity;
//# sourceMappingURL=UnprocessableEntity.js.map