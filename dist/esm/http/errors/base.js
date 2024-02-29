export function isHTTPError(error) {
    if (!error) {
        return false;
    }
    return Number.isInteger(error.statusCode);
}
export function isHTTPIssue(error) {
    if (!error) {
        return false;
    }
    return error.title !== undefined && isHTTPError(error);
}
export class BaseHTTPError extends Error {
    constructor(detail = '') {
        super(detail || 'An Unknown HTTP Error Occurred');
        this.title = 'Internal Server Error';
        this.statusCode = 500;
        this.detail = detail;
        this.stack = new Error().stack;
    }
}
export function isClientError(error) {
    return isHTTPError(error);
}
export function isServerError(e) {
    return isHTTPError(e) && e.statusCode >= 500 && e.statusCode <= 599;
}
//# sourceMappingURL=base.js.map