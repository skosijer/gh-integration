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
    class BadRequest extends base_1.BaseHTTPError {
        constructor(detail = '') {
            super(detail);
            this.statusCode = 400;
            this.title = 'Bad Request';
        }
    }
    exports.default = BadRequest;
});
//# sourceMappingURL=BadRequest.js.map