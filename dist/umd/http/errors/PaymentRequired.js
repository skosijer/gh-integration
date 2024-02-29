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
    class PaymentRequired extends base_1.BaseHTTPError {
        constructor(detail = '') {
            super(detail);
            this.statusCode = 402;
            this.title = 'Payment Required';
        }
    }
    exports.default = PaymentRequired;
});
//# sourceMappingURL=PaymentRequired.js.map