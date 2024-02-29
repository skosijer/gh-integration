(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Environment = void 0;
    var Environment;
    (function (Environment) {
        Environment["DEFAULT"] = "https://admin.api.crowdsec.net/v1/internal";
    })(Environment = exports.Environment || (exports.Environment = {}));
});
//# sourceMappingURL=Environment.js.map