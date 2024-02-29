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
    class PayloadTooLarge extends base_1.BaseHTTPError {
        constructor(detail = '', retryAfter = null) {
            super(detail);
            this.statusCode = 413;
            this.title = 'Payload Too Large';
            this.retryAfter = retryAfter;
        }
    }
    exports.default = PayloadTooLarge;
});
//# sourceMappingURL=PayloadTooLarge.js.map