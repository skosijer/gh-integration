"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class PreconditionFailed extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 412;
        this.title = 'PreconditionFailed';
    }
}
exports.default = PreconditionFailed;
//# sourceMappingURL=PreconditionFailed.js.map