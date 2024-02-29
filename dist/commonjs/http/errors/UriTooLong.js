"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class UriTooLong extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 414;
        this.title = 'URI Too Long';
    }
}
exports.default = UriTooLong;
//# sourceMappingURL=UriTooLong.js.map