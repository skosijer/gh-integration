"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("./errors");
const statusCodeToErrorFunction = {
    400: errors_1.BadRequest,
    401: errors_1.Unauthorized,
    402: errors_1.PaymentRequired,
    403: errors_1.Forbidden,
    404: errors_1.NotFound,
    405: errors_1.MethodNotAllowed,
    406: errors_1.NotAcceptable,
    407: errors_1.ProxyAuthenticationRequired,
    408: errors_1.RequestTimeout,
    409: errors_1.Conflict,
    410: errors_1.Gone,
    411: errors_1.LengthRequired,
    412: errors_1.PreconditionFailed,
    413: errors_1.PayloadTooLarge,
    414: errors_1.UriTooLong,
    415: errors_1.UnsupportedMediaType,
    416: errors_1.RangeNotSatisfiable,
    417: errors_1.ExpectationFailed,
    421: errors_1.MisdirectedRequest,
    422: errors_1.UnprocessableEntity,
    423: errors_1.Locked,
    424: errors_1.FailedDependency,
    425: errors_1.TooEarly,
    426: errors_1.UpgradeRequired,
    428: errors_1.PreconditionRequired,
    429: errors_1.TooManyRequests,
    431: errors_1.RequestHeaderFieldsTooLarge,
    451: errors_1.UnavailableForLegalReasons,
    500: errors_1.InternalServerError,
    501: errors_1.NotImplemented,
    502: errors_1.BadGateway,
    503: errors_1.ServiceUnavailable,
    504: errors_1.GatewayTimeout,
    505: errors_1.HttpVersionNotSupported,
    506: errors_1.VariantAlsoNegotiates,
    507: errors_1.UnsufficientStorage,
    508: errors_1.LoopDetected,
    510: errors_1.NotExtended,
    511: errors_1.NetworkAuthenticationRequired,
};
/**
 * @summary This function will throw an error.
 *
 * @param {HttpResponseWithError} response - the response from a request, must contain a status and data fields
 * @throws {Error} - an http error
 */
function throwHttpError(response) {
    let error = new errors_1.BaseHTTPError(response.data);
    switch (response.status) {
        case 401:
            error = new errors_1.Unauthorized(response.data, response.headers['WWW-Authenticate']);
            break;
        case 405:
            // this indicates a bug in the spec if it allows a method that the server rejects
            error = new errors_1.MethodNotAllowed(response.data, response.headers.allowed);
            break;
        case 407:
            error = new errors_1.ProxyAuthenticationRequired(response.data, response.headers['Proxy-Authenticate']);
            break;
        case 413:
            error = new errors_1.PayloadTooLarge(response.data, response.headers['Retry-After']);
            break;
        case 429:
            error = new errors_1.TooManyRequests(response.data, response.headers['Retry-After']);
            break;
        case 503:
            error = new errors_1.ServiceUnavailable(response.data, response.headers['Retry-After']);
            break;
        default:
            if (response.status in statusCodeToErrorFunction) {
                error = new statusCodeToErrorFunction[response.status](response.data);
            }
            else {
                const error = new errors_1.BaseHTTPError(response.data);
                error.statusCode = response.status;
                error.title = 'unknown error';
            }
    }
    throw error;
}
exports.default = throwHttpError;
//# sourceMappingURL=httpExceptions.js.map