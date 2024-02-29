"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class UnavailableForLegalReasons extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 451;
        this.title = 'Unavailable For Legal Reasons';
    }
}
exports.default = UnavailableForLegalReasons;
//# sourceMappingURL=UnavailableForLegalReasons.js.map