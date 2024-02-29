"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class NotExtended extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 510;
        this.title = 'Not Extended';
    }
}
exports.default = NotExtended;
//# sourceMappingURL=NotExtended.js.map