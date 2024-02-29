"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class UnsupportedMediaType extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 415;
        this.title = 'Unsupported Media Type';
    }
}
exports.default = UnsupportedMediaType;
//# sourceMappingURL=UnsupportedMediaType.js.map