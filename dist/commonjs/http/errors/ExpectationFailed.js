"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class ExpectationFailed extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 417;
        this.title = 'Expectation Failed';
    }
}
exports.default = ExpectationFailed;
//# sourceMappingURL=ExpectationFailed.js.map