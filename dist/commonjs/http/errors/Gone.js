"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Gone extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 410;
        this.title = 'Gone';
    }
}
exports.default = Gone;
//# sourceMappingURL=Gone.js.map