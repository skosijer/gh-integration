"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnginesService = void 0;
const BaseService_1 = __importDefault(require("../../BaseService"));
const QuerySerializer_1 = require("../../http/QuerySerializer");
class EnginesService extends BaseService_1.default {
    /**
     * @summary Get Engines
     * @description Get engines for an organization
  
     * @param organizationId Needed input variable
     * @param optionalParams - Optional parameters
     * @param optionalParams.page - Page number
     * @param optionalParams.size - Page size
     * @returns {Promise<Response<PageEngine_>>} - The promise with the result
     */
    async getEngines(organizationId, optionalParams = {}) {
        const { page, size } = optionalParams;
        if (organizationId === undefined) {
            throw new Error('The following parameter is required: organizationId, cannot be empty or blank');
        }
        const queryParams = [];
        let urlEndpoint = '/orgs/{organization_id}/engines';
        urlEndpoint = urlEndpoint.replace('{organization_id}', (0, QuerySerializer_1.serializePath)('simple', false, organizationId, undefined));
        if (page) {
            queryParams.push((0, QuerySerializer_1.serializeQuery)('form', true, 'page', page));
        }
        if (size) {
            queryParams.push((0, QuerySerializer_1.serializeQuery)('form', true, 'size', size));
        }
        const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
        const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
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
     * @summary Get Engine
     * @description Get an engine for an organization
  
     * @param organizationId Needed input variable
     * @param engineId Needed input variable
     * @returns {Promise<Response<Engine>>} - The promise with the result
     */
    async getEngine(organizationId, engineId) {
        if (organizationId === undefined || engineId === undefined) {
            throw new Error('The following are required parameters: organizationId,engineId, cannot be empty or blank');
        }
        let urlEndpoint = '/orgs/{organization_id}/engines/{engine_id}';
        urlEndpoint = urlEndpoint.replace('{organization_id}', (0, QuerySerializer_1.serializePath)('simple', false, organizationId, undefined));
        urlEndpoint = urlEndpoint.replace('{engine_id}', (0, QuerySerializer_1.serializePath)('simple', false, engineId, undefined));
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
}
exports.EnginesService = EnginesService;
//# sourceMappingURL=Engines.js.map