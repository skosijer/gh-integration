import HTTPClient, { Headers } from './HTTPClient';
export default class HTTPLibrary implements HTTPClient {
    readonly retryAttempts: number;
    readonly retryDelayMs: number;
    private static readonly responseMapper;
    private readonly requestMapper;
    get(url: string, input: any, headers: Headers, retry?: boolean): Promise<any>;
    post(url: string, input: any, headers: Headers, retry?: boolean): Promise<any>;
    delete(url: string, input: any, headers: Headers, retry?: boolean): Promise<any>;
    put(url: string, input: any, headers: Headers, retry?: boolean): Promise<any>;
    patch(url: string, input: any, headers: Headers, retry?: boolean): Promise<any>;
    retry(retries: number, callbackFn: () => any, delay: number): Promise<any>;
    private static handleResponse;
    private getUserAgentHeader;
    /**
     *Converts keys in an object using a provided JSON mapper.
     * @param {any} obj - The object to convert keys for.
     * @param {Object} jsonMapper - The JSON mapper containing key mappings.
     * @returns {any} - The object with converted keys.
     */
    private static convertKeysWithMapper;
}
//# sourceMappingURL=HTTPLibrary.d.ts.map