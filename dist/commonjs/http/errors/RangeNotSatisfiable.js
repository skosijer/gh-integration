"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class RangeNotSatisfiable extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 416;
        this.title = 'Range Not Satisfiable';
    }
}
exports.default = RangeNotSatisfiable;
//# sourceMappingURL=RangeNotSatisfiable.js.map