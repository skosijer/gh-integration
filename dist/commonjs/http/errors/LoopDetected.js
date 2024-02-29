"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class LoopDetected extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 508;
        this.title = 'Loop Detected';
    }
}
exports.default = LoopDetected;
//# sourceMappingURL=LoopDetected.js.map