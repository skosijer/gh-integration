"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class UpgradeRequired extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 426;
        this.title = 'Upgrade Required';
    }
}
exports.default = UpgradeRequired;
//# sourceMappingURL=UpgradeRequired.js.map