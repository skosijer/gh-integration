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
    class MethodNotAllowed extends base_1.BaseHTTPError {
        constructor(detail = '', allow) {
            super(detail);
            this.statusCode = 405;
            this.title = 'Method Not Allowed';
            this.allow = allow;
        }
    }
    exports.default = MethodNotAllowed;
});
//# sourceMappingURL=MethodNotAllowed.js.map