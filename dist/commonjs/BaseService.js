"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const form_data_1 = __importDefault(require("form-data"));
const Environment_1 = require("./http/Environment");
const HTTPLibrary_1 = __importDefault(require("./http/HTTPLibrary"));
class BaseService {
    setAccessToken(accessToken) {
        this.accessToken = accessToken;
    }
    getAuthorizationHeader() {
        const accessTokenAuth = { Authorization: `${this.accessTokenPrefix} ${this.accessToken}` };
        return { ...accessTokenAuth };
    }
    setBaseUrl(url) {
        this.baseUrl = url;
    }
    constructor(accessToken = '') {
        this.baseUrl = Environment_1.Environment.DEFAULT;
        this.httpClient = new HTTPLibrary_1.default();
        this.accessToken = '';
        this.accessTokenPrefix = 'Bearer';
        this.setAccessToken(accessToken);
    }
    static patternMatching(value, pattern, variableName) {
        if (!value) {
            throw new Error(`${variableName} cannot be null or undefined`);
        }
        if (!value.match(new RegExp(pattern))) {
            throw new Error(`Invalid value for ${variableName}: must match ${pattern}`);
        }
        return value;
    }
    /**
     * Converts model objects to FormData for multipart/form-data requests
     *
     * @param {any} input  The original data that fills a model
     * @return {FormData}  The input converted to a form
     */
    static formData(input) {
        const formData = new form_data_1.default();
        const flatInput = BaseService.flattenObject(input, '');
        Object.keys(flatInput).forEach((key) => {
            const value = flatInput[key];
            if (value !== undefined && value !== null) {
                if (value instanceof Date) {
                    formData.append(key, value.toISOString());
                }
                else if (typeof value === 'boolean') {
                    formData.append(key, value ? 'true' : 'false');
                }
                else if (value instanceof Array) {
                    formData.append(key, value.join(','));
                }
                else {
                    formData.append(key, value);
                }
            }
        });
        return formData;
    }
}
exports.default = BaseService;
/**
 * Flattens an object into a single level object
 * @param {Object} obj The object to flatten
 * @param {string} parentKey The parent key
 * @return {Object} The flattened object
 */
BaseService.flattenObject = (obj, parentKey) => {
    let result = {};
    Object.keys(obj).forEach((key) => {
        const value = obj[key];
        if (Object.hasOwn(value, '_readableState')) {
            result[key] = value;
            return;
        }
        if (Object.hasOwn(value, 'name') &&
            Object.hasOwn(value, 'lastModified') &&
            Object.hasOwn(value, 'size') &&
            Object.hasOwn(value, 'type') &&
            Object.hasOwn(value, 'webkitRelativePath')) {
            result[key] = value;
            return;
        }
        if (value instanceof Array || value.path) {
            result[key] = value;
            return;
        }
        const formattedKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof value === 'object' && value !== null) {
            result = { ...result, ...BaseService.flattenObject(value, formattedKey) };
        }
        else {
            result[formattedKey] = value;
        }
    });
    return result;
};
BaseService.urlEncode = (input) => Object.keys(input)
    .map((key) => `${key}=${encodeURIComponent(input[key])}`)
    .join('&');
//# sourceMappingURL=BaseService.js.map