import BaseService from '../../BaseService';
import Response from '../../http/Response';
import { CreateQuotaResponse } from './models/CreateQuotaResponse';
import { UpdateQuotaResponse } from './models/UpdateQuotaResponse';
import { CreateQuotaRequest } from './models/CreateQuotaRequest';
import { UpdateQuotaRequest } from './models/UpdateQuotaRequest';
export declare class QuotasService extends BaseService {
    /**
     * @summary Create Quota
     * @description Create quotas for an organization
  
     * @param organizationId Needed input variable
     * @returns {Promise<Response<CreateQuotaResponse>>} - The promise with the result
     */
    createQuota(input: CreateQuotaRequest, organizationId: string): Promise<Response<CreateQuotaResponse>>;
    /**
     * @summary Update Quota
     * @description Update quotas for an organization
  
     * @param organizationId Needed input variable
     * @returns {Promise<Response<UpdateQuotaResponse>>} - The promise with the result
     */
    updateQuota(input: UpdateQuotaRequest, organizationId: string): Promise<Response<UpdateQuotaResponse>>;
    /**
     * @summary Delete Quota
     * @description Delete quotas for an organization
  
     * @param organizationId Needed input variable
     * @returns {Promise<any>} - The promise with the result
     */
    deleteQuota(organizationId: string): Promise<any>;
}
//# sourceMappingURL=Quotas.d.ts.map