"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class MisdirectedRequest extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 421;
        this.title = 'Misdirected Request';
    }
}
exports.default = MisdirectedRequest;
//# sourceMappingURL=MisdirectedRequest.js.map