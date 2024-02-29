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
    class NotAcceptable extends base_1.BaseHTTPError {
        constructor(detail = '') {
            super(detail);
            this.statusCode = 406;
            this.title = 'Not Acceptable';
        }
    }
    exports.default = NotAcceptable;
});
//# sourceMappingURL=NotAcceptable.js.map