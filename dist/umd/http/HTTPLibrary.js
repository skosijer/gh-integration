var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "form-data", "axios", "./httpExceptions"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const form_data_1 = __importDefault(require("form-data"));
    const axios_1 = __importDefault(require("axios"));
    const httpExceptions_1 = __importDefault(require("./httpExceptions"));
    class HTTPLibrary {
        constructor() {
            this.retryAttempts = 4;
            this.retryDelayMs = 130;
            this.requestMapper = new Map([
                ['private_', 'private'],
                ['type_', 'type'],
                ['headers_', 'headers'],
            ]);
        }
        async get(url, input, headers, retry = false) {
            const request = () => axios_1.default.get(url, {
                headers: { ...headers, ...this.getUserAgentHeader() },
                data: Object.keys(input).length > 0
                    ? HTTPLibrary.convertKeysWithMapper(input, this.requestMapper)
                    : undefined,
            });
            const response = retry
                ? await this.retry(this.retryAttempts, request, this.retryDelayMs)
                : await request();
            return HTTPLibrary.handleResponse(response);
        }
        async post(url, input, headers, retry = false) {
            const request = () => axios_1.default.post(url, HTTPLibrary.convertKeysWithMapper(input, this.requestMapper), {
                headers: { ...headers, ...this.getUserAgentHeader() },
            });
            const response = retry
                ? await this.retry(this.retryAttempts, request, this.retryDelayMs)
                : await request();
            return HTTPLibrary.handleResponse(response);
        }
        async delete(url, input, headers, retry = false) {
            const request = () => axios_1.default.delete(url, {
                headers: { ...headers, ...this.getUserAgentHeader() },
                data: HTTPLibrary.convertKeysWithMapper(input, this.requestMapper),
            });
            const response = retry
                ? await this.retry(this.retryAttempts, request, this.retryDelayMs)
                : await request();
            return HTTPLibrary.handleResponse(response);
        }
        async put(url, input, headers, retry = false) {
            const request = () => axios_1.default.put(url, HTTPLibrary.convertKeysWithMapper(input, this.requestMapper), {
                headers: { ...headers, ...this.getUserAgentHeader() },
            });
            const response = retry
                ? await this.retry(this.retryAttempts, request, this.retryDelayMs)
                : await request();
            return HTTPLibrary.handleResponse(response);
        }
        async patch(url, input, headers, retry = false) {
            const request = () => axios_1.default.patch(url, HTTPLibrary.convertKeysWithMapper(input, this.requestMapper), {
                headers: { ...headers, ...this.getUserAgentHeader() },
            });
            const response = retry
                ? await this.retry(this.retryAttempts, request, this.retryDelayMs)
                : await request();
            return HTTPLibrary.handleResponse(response);
        }
        async retry(retries, callbackFn, delay) {
            let result;
            try {
                result = await callbackFn();
            }
            catch (e) {
                if (e.isAxiosError) {
                    if (e.response) {
                        if (![500, 503, 504].includes(e.response.status)) {
                            return e.response;
                        }
                    }
                }
                if (retries > 1) {
                    // eslint-disable-next-line no-promise-executor-return
                    await new Promise((resolve) => setTimeout(resolve, delay));
                    result = await this.retry(retries - 1, callbackFn, delay * 2);
                }
                else {
                    throw e;
                }
            }
            return result;
        }
        static handleResponse(response) {
            if (response.status >= 400) {
                (0, httpExceptions_1.default)(response);
            }
            response.data = HTTPLibrary.convertKeysWithMapper(response.data, this.responseMapper);
            return response;
        }
        getUserAgentHeader() {
            const userAgentBase = 'Testsdk/1.0.0';
            let userAgent = '';
            if (typeof window !== 'undefined') {
                userAgent = `${navigator.userAgent} ${userAgentBase}`;
            }
            else if (typeof process !== 'undefined') {
                userAgent = `Node.js/${process.version} ${userAgentBase}`;
            }
            else if (typeof Deno !== 'undefined') {
                userAgent = `Deno/${Deno.version.deno} ${userAgentBase}`;
            }
            else if (typeof Bun !== 'undefined') {
                userAgent = `Bun/${Bun.version} ${userAgentBase}`;
            }
            else {
                userAgent = userAgentBase;
            }
            return { 'User-Agent': userAgent };
        }
        /**
         *Converts keys in an object using a provided JSON mapper.
         * @param {any} obj - The object to convert keys for.
         * @param {Object} jsonMapper - The JSON mapper containing key mappings.
         * @returns {any} - The object with converted keys.
         */
        static convertKeysWithMapper(obj, jsonMapper) {
            if (!obj || typeof obj !== 'object' || obj instanceof form_data_1.default) {
                return obj;
            }
            if (Array.isArray(obj)) {
                return obj.map((item) => HTTPLibrary.convertKeysWithMapper(item, jsonMapper));
            }
            const convertedObj = {};
            Object.entries(obj).forEach(([key, value]) => {
                if (value !== undefined) {
                    const convertedKey = jsonMapper.get(key) || key;
                    convertedObj[convertedKey] = HTTPLibrary.convertKeysWithMapper(value, jsonMapper);
                }
            });
            return convertedObj;
        }
    }
    exports.default = HTTPLibrary;
    HTTPLibrary.responseMapper = new Map([
        ['private', 'private_'],
        ['type', 'type_'],
        ['headers', 'headers_'],
    ]);
});
//# sourceMappingURL=HTTPLibrary.js.map