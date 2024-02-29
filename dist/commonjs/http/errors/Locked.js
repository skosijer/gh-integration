"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Locked extends base_1.BaseHTTPError {
    constructor(detail = '') {
        super(detail);
        this.statusCode = 423;
        this.title = 'Locked';
    }
}
exports.default = Locked;
//# sourceMappingURL=Locked.js.map