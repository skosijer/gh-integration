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
    class ProxyAuthenticationRequired extends base_1.BaseHTTPError {
        constructor(detail = '', proxyAuthenticate) {
            super(detail);
            this.statusCode = 407;
            this.title = 'Proxy Authentication Required';
            this.proxyAuthenticate = proxyAuthenticate;
        }
    }
    exports.default = ProxyAuthenticationRequired;
});
//# sourceMappingURL=ProxyAuthenticationRequired.js.map