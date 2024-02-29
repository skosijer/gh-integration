"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class NotImplemented extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 501;
        this.title = 'Not Implemented';
    }
}
exports.default = NotImplemented;
//# sourceMappingURL=NotImplemented.js.map