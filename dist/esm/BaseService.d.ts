import HTTPLibrary from './http/HTTPLibrary';
import { Headers } from './http/HTTPClient';
export default class BaseService {
    baseUrl: string;
    httpClient: HTTPLibrary;
    private accessToken;
    private accessTokenPrefix;
    setAccessToken(accessToken: string): void;
    getAuthorizationHeader(): Headers;
    setBaseUrl(url: string): void;
    constructor(accessToken?: string);
    static patternMatching(value: string, pattern: string, variableName: string): string;
    /**
     * Converts model objects to FormData for multipart/form-data requests
     *
     * @param {any} input  The original data that fills a model
     * @return {FormData}  The input converted to a form
     */
    static formData(input: {
        [key: string]: any;
    }): any;
    /**
     * Flattens an object into a single level object
     * @param {Object} obj The object to flatten
     * @param {string} parentKey The parent key
     * @return {Object} The flattened object
     */
    static flattenObject: (obj: {
        [key: string]: any;
    }, parentKey?: string) => Object;
    static urlEncode: (input: {
        [key: string]: any;
    }) => string;
}
//# sourceMappingURL=BaseService.d.ts.map