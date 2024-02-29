(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./base"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const base_1 = require("./base");
    class RequestHeaderFieldsTooLarge extends base_1.BaseHTTPError {
        constructor(detail = '') {
            super(detail);
            this.statusCode = 431;
            this.title = 'Request Header Fields Too Large';
        }
    }
    exports.default = RequestHeaderFieldsTooLarge;
});
//# sourceMappingURL=RequestHeaderFieldsTooLarge.js.map