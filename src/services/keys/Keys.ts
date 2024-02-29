import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { KeysReadResponse } from './models/KeysReadResponse';
import { KeyCreateResponse } from './models/KeyCreateResponse';
import { CreateKeyRequest } from './models/CreateKeyRequest';
import { UpdateKeyResponse } from './models/UpdateKeyResponse';
import { UpdateKeyRequest } from './models/UpdateKeyRequest';

import { serializePath } from '../../http/QuerySerializer';

export class KeysService extends BaseService {
  /**
   * @summary Get Keys By Org
   * @description Get keys for an organization

   * @param organizationId Needed input variable
   * @returns {Promise<Response<KeysReadResponse>>} - The promise with the result
   */
  async getKeys(organizationId: string): Promise<Response<KeysReadResponse>> {
    if (organizationId === undefined) {
      throw new Error(
        'The following parameter is required: organizationId, cannot be empty or blank',
      );
    }
    let urlEndpoint = '/orgs/{organization_id}/keys';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
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
  async createKey(
    input: CreateKeyRequest,
    organizationId: string,
  ): Promise<Response<KeyCreateResponse>> {
    if (organizationId === undefined) {
      throw new Error(
        'The following parameter is required: organizationId, cannot be empty or blank',
      );
    }
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    let urlEndpoint = '/orgs/{organization_id}/keys';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.post(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
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
  async updateKey(
    input: UpdateKeyRequest,
    organizationId: string,
    keyId: string,
  ): Promise<Response<UpdateKeyResponse>> {
    if (organizationId === undefined || keyId === undefined) {
      throw new Error(
        'The following are required parameters: organizationId,keyId, cannot be empty or blank',
      );
    }
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    let urlEndpoint = '/orgs/{organization_id}/keys/{keyId}';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    urlEndpoint = urlEndpoint.replace('{keyId}', serializePath('simple', false, keyId, undefined));
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.put(
      finalUrl,
      input,
      {
        ...headers,
        ...this.getAuthorizationHeader(),
      },
      true,
    );
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
  async deleteKey(organizationId: string, keyId: string): Promise<any> {
    if (organizationId === undefined || keyId === undefined) {
      throw new Error(
        'The following are required parameters: organizationId,keyId, cannot be empty or blank',
      );
    }
    let urlEndpoint = '/orgs/{organization_id}/keys/{keyId}';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    urlEndpoint = urlEndpoint.replace('{keyId}', serializePath('simple', false, keyId, undefined));
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.delete(
      finalUrl,
      {},
      {
        ...this.getAuthorizationHeader(),
      },
      true,
    );
    const responseModel = {
      data: response.data,
      headers: response.headers,
    };
    return responseModel;
  }
}
