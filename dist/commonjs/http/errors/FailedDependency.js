"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class FailedDependency extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 424;
        this.title = 'Failed Dependency';
    }
}
exports.default = FailedDependency;
//# sourceMappingURL=FailedDependency.js.map