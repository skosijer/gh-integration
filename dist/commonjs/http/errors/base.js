"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isServerError = exports.isClientError = exports.BaseHTTPError = exports.isHTTPIssue = exports.isHTTPError = void 0;
function isHTTPError(error) {
    if (!error) {
        return false;
    }
    return Number.isInteger(error.statusCode);
}
exports.isHTTPError = isHTTPError;
function isHTTPIssue(error) {
    if (!error) {
        return false;
    }
    return error.title !== undefined && isHTTPError(error);
}
exports.isHTTPIssue = isHTTPIssue;
class BaseHTTPError extends Error {
    constructor(detail = '') {
        super(detail || 'An Unknown HTTP Error Occurred');
        this.title = 'Internal Server Error';
        this.statusCode = 500;
        this.detail = detail;
        this.stack = new Error().stack;
    }
}
exports.BaseHTTPError = BaseHTTPError;
function isClientError(error) {
    return isHTTPError(error);
}
exports.isClientError = isClientError;
function isServerError(e) {
    return isHTTPError(e) && e.statusCode >= 500 && e.statusCode <= 599;
}
exports.isServerError = isServerError;
//# sourceMappingURL=base.js.map