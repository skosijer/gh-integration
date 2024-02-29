interface HttpResponseWithError {
    status: number;
    headers: any;
    data?: any;
}
/**
 * @summary This function will throw an error.
 *
 * @param {HttpResponseWithError} response - the response from a request, must contain a status and data fields
 * @throws {Error} - an http error
 */
export default function throwHttpError(response: HttpResponseWithError): never;
export {};
//# sourceMappingURL=httpExceptions.d.ts.map