import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { PageEngine_ } from './models/PageEngine_';
import { Engine } from './models/Engine';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class EnginesService extends BaseService {
  /**
   * @summary Get Engines
   * @description Get engines for an organization

   * @param organizationId Needed input variable
   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Page number
   * @param optionalParams.size - Page size
   * @returns {Promise<Response<PageEngine_>>} - The promise with the result
   */
  async getEngines(
    organizationId: string,
    optionalParams: { page?: number; size?: number } = {},
  ): Promise<Response<PageEngine_>> {
    const { page, size } = optionalParams;
    if (organizationId === undefined) {
      throw new Error(
        'The following parameter is required: organizationId, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/orgs/{organization_id}/engines';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    if (page) {
      queryParams.push(serializeQuery('form', true, 'page', page));
    }
    if (size) {
      queryParams.push(serializeQuery('form', true, 'size', size));
    }
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
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
   * @summary Get Engine
   * @description Get an engine for an organization

   * @param organizationId Needed input variable
   * @param engineId Needed input variable
   * @returns {Promise<Response<Engine>>} - The promise with the result
   */
  async getEngine(organizationId: string, engineId: string): Promise<Response<Engine>> {
    if (organizationId === undefined || engineId === undefined) {
      throw new Error(
        'The following are required parameters: organizationId,engineId, cannot be empty or blank',
      );
    }
    let urlEndpoint = '/orgs/{organization_id}/engines/{engine_id}';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{engine_id}',
      serializePath('simple', false, engineId, undefined),
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
}
