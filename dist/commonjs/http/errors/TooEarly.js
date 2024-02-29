"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class TooEarly extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 425;
        this.title = 'Too Early';
    }
}
exports.default = TooEarly;
//# sourceMappingURL=TooEarly.js.map