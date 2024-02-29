"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class UnsufficientStorage extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 507;
        this.title = 'Unsufficient Storage';
    }
}
exports.default = UnsufficientStorage;
//# sourceMappingURL=UnsufficientStorage.js.map