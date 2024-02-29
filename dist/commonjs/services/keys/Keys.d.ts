import BaseService from '../../BaseService';
import Response from '../../http/Response';
import { KeysReadResponse } from './models/KeysReadResponse';
import { KeyCreateResponse } from './models/KeyCreateResponse';
import { CreateKeyRequest } from './models/CreateKeyRequest';
import { UpdateKeyResponse } from './models/UpdateKeyResponse';
import { UpdateKeyRequest } from './models/UpdateKeyRequest';
export declare class KeysService extends BaseService {
    /**
     * @summary Get Keys By Org
     * @description Get keys for an organization
  
     * @param organizationId Needed input variable
     * @returns {Promise<Response<KeysReadResponse>>} - The promise with the result
     */
    getKeys(organizationId: string): Promise<Response<KeysReadResponse>>;
    /**
     * @summary Create Key By Org
     * @description Create a new API key for an organization
  
     * @param organizationId Needed input variable
     * @returns {Promise<Response<KeyCreateResponse>>} - The promise with the result
     */
    createKey(input: CreateKeyRequest, organizationId: string): Promise<Response<KeyCreateResponse>>;
    /**
     * @summary Update Key By Org
     * @description Update a key for an organization
  
     * @param organizationId Needed input variable
     * @param keyId Needed input variable
     * @returns {Promise<Response<UpdateKeyResponse>>} - The promise with the result
     */
    updateKey(input: UpdateKeyRequest, organizationId: string, keyId: string): Promise<Response<UpdateKeyResponse>>;
    /**
     * @summary Delete Key By Org
     * @description Delete a key for an organization
  
     * @param organizationId Needed input variable
     * @param keyId Needed input variable
     * @returns {Promise<any>} - The promise with the result
     */
    deleteKey(organizationId: string, keyId: string): Promise<any>;
}
//# sourceMappingURL=Keys.d.ts.map