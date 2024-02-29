import FormData from 'form-data';
import axios from 'axios';
import throwHttpError from './httpExceptions';
export default class HTTPLibrary {
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
        const request = () => axios.get(url, {
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
        const request = () => axios.post(url, HTTPLibrary.convertKeysWithMapper(input, this.requestMapper), {
            headers: { ...headers, ...this.getUserAgentHeader() },
        });
        const response = retry
            ? await this.retry(this.retryAttempts, request, this.retryDelayMs)
            : await request();
        return HTTPLibrary.handleResponse(response);
    }
    async delete(url, input, headers, retry = false) {
        const request = () => axios.delete(url, {
            headers: { ...headers, ...this.getUserAgentHeader() },
            data: HTTPLibrary.convertKeysWithMapper(input, this.requestMapper),
        });
        const response = retry
            ? await this.retry(this.retryAttempts, request, this.retryDelayMs)
            : await request();
        return HTTPLibrary.handleResponse(response);
    }
    async put(url, input, headers, retry = false) {
        const request = () => axios.put(url, HTTPLibrary.convertKeysWithMapper(input, this.requestMapper), {
            headers: { ...headers, ...this.getUserAgentHeader() },
        });
        const response = retry
            ? await this.retry(this.retryAttempts, request, this.retryDelayMs)
            : await request();
        return HTTPLibrary.handleResponse(response);
    }
    async patch(url, input, headers, retry = false) {
        const request = () => axios.patch(url, HTTPLibrary.convertKeysWithMapper(input, this.requestMapper), {
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
            throwHttpError(response);
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
        if (!obj || typeof obj !== 'object' || obj instanceof FormData) {
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
HTTPLibrary.responseMapper = new Map([
    ['private', 'private_'],
    ['type', 'type_'],
    ['headers', 'headers_'],
]);
//# sourceMappingURL=HTTPLibrary.js.map