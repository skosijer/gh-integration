var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../BaseService", "../../http/QuerySerializer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.KeysService = void 0;
    const BaseService_1 = __importDefault(require("../../BaseService"));
    const QuerySerializer_1 = require("../../http/QuerySerializer");
    class KeysService extends BaseService_1.default {
        /**
         * @summary Get Keys By Org
         * @description Get keys for an organization
      
         * @param organizationId Needed input variable
         * @returns {Promise<Response<KeysReadResponse>>} - The promise with the result
         */
        async getKeys(organizationId) {
            if (organizationId === undefined) {
                throw new Error('The following parameter is required: organizationId, cannot be empty or blank');
            }
            let urlEndpoint = '/orgs/{organization_id}/keys';
            urlEndpoint = urlEndpoint.replace('{organization_id}', (0, QuerySerializer_1.serializePath)('simple', false, organizationId, undefined));
            const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
            const response = await this.httpClient.get(finalUrl, {}, {
                ...this.getAuthorizationHeader(),
            }, true);
            const responseModel = {
                data: response.data,
                headers: response.headers,
            };
            return responseModel;
        }
        /**
         * @summary Create Key By Org
         * @description Create a new API key for an organization
      
         * @param organizationId Needed input variable
         * @returns {Promise<Response<KeyCreateResponse>>} - The promise with the result
         */
        async createKey(input, organizationId) {
            if (organizationId === undefined) {
                throw new Error('The following parameter is required: organizationId, cannot be empty or blank');
            }
            const headers = { 'Content-type': 'application/json' };
            let urlEndpoint = '/orgs/{organization_id}/keys';
            urlEndpoint = urlEndpoint.replace('{organization_id}', (0, QuerySerializer_1.serializePath)('simple', false, organizationId, undefined));
            const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
            const response = await this.httpClient.post(finalUrl, input, {
                ...headers,
                ...this.getAuthorizationHeader(),
            }, true);
            const responseModel = {
                data: response.data,
                headers: response.headers,
            };
            return responseModel;
        }
        /**
         * @summary Update Key By Org
         * @description Update a key for an organization
      
         * @param organizationId Needed input variable
         * @param keyId Needed input variable
         * @returns {Promise<Response<UpdateKeyResponse>>} - The promise with the result
         */
        async updateKey(input, organizationId, keyId) {
            if (organizationId === undefined || keyId === undefined) {
                throw new Error('The following are required parameters: organizationId,keyId, cannot be empty or blank');
            }
            const headers = { 'Content-type': 'application/json' };
            let urlEndpoint = '/orgs/{organization_id}/keys/{keyId}';
            urlEndpoint = urlEndpoint.replace('{organization_id}', (0, QuerySerializer_1.serializePath)('simple', false, organizationId, undefined));
            urlEndpoint = urlEndpoint.replace('{keyId}', (0, QuerySerializer_1.serializePath)('simple', false, keyId, undefined));
            const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
            const response = await this.httpClient.put(finalUrl, input, {
                ...headers,
                ...this.getAuthorizationHeader(),
            }, true);
            const responseModel = {
                data: response.data,
                headers: response.headers,
            };
            return responseModel;
        }
        /**
         * @summary Delete Key By Org
         * @description Delete a key for an organization
      
         * @param organizationId Needed input variable
         * @param keyId Needed input variable
         * @returns {Promise<any>} - The promise with the result
         */
        async deleteKey(organizationId, keyId) {
            if (organizationId === undefined || keyId === undefined) {
                throw new Error('The following are required parameters: organizationId,keyId, cannot be empty or blank');
            }
            let urlEndpoint = '/orgs/{organization_id}/keys/{keyId}';
            urlEndpoint = urlEndpoint.replace('{organization_id}', (0, QuerySerializer_1.serializePath)('simple', false, organizationId, undefined));
            urlEndpoint = urlEndpoint.replace('{keyId}', (0, QuerySerializer_1.serializePath)('simple', false, keyId, undefined));
            const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
            const response = await this.httpClient.delete(finalUrl, {}, {
                ...this.getAuthorizationHeader(),
            }, true);
            const responseModel = {
                data: response.data,
                headers: response.headers,
            };
            return responseModel;
        }
    }
    exports.KeysService = KeysService;
});
//# sourceMappingURL=Keys.js.map