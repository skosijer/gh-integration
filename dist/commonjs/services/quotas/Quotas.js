"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotasService = void 0;
const BaseService_1 = __importDefault(require("../../BaseService"));
const QuerySerializer_1 = require("../../http/QuerySerializer");
class QuotasService extends BaseService_1.default {
    /**
     * @summary Create Quota
     * @description Create quotas for an organization
  
     * @param organizationId Needed input variable
     * @returns {Promise<Response<CreateQuotaResponse>>} - The promise with the result
     */
    async createQuota(input, organizationId) {
        if (organizationId === undefined) {
            throw new Error('The following parameter is required: organizationId, cannot be empty or blank');
        }
        const headers = { 'Content-type': 'application/json' };
        let urlEndpoint = '/orgs/{organization_id}/quotas';
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
     * @summary Update Quota
     * @description Update quotas for an organization
  
     * @param organizationId Needed input variable
     * @returns {Promise<Response<UpdateQuotaResponse>>} - The promise with the result
     */
    async updateQuota(input, organizationId) {
        if (organizationId === undefined) {
            throw new Error('The following parameter is required: organizationId, cannot be empty or blank');
        }
        const headers = { 'Content-type': 'application/json' };
        let urlEndpoint = '/orgs/{organization_id}/quotas';
        urlEndpoint = urlEndpoint.replace('{organization_id}', (0, QuerySerializer_1.serializePath)('simple', false, organizationId, undefined));
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
     * @summary Delete Quota
     * @description Delete quotas for an organization
  
     * @param organizationId Needed input variable
     * @returns {Promise<any>} - The promise with the result
     */
    async deleteQuota(organizationId) {
        if (organizationId === undefined) {
            throw new Error('The following parameter is required: organizationId, cannot be empty or blank');
        }
        let urlEndpoint = '/orgs/{organization_id}/quotas';
        urlEndpoint = urlEndpoint.replace('{organization_id}', (0, QuerySerializer_1.serializePath)('simple', false, organizationId, undefined));
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
exports.QuotasService = QuotasService;
//# sourceMappingURL=Quotas.js.map