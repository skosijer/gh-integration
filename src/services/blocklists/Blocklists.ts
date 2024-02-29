import BaseService from '../../BaseService';

import Response from '../../http/Response';

import { BlocklistsGetResponse } from './models/BlocklistsGetResponse';
import { BlocklistCreateResponse } from './models/BlocklistCreateResponse';
import { CreateBlocklistRequest } from './models/CreateBlocklistRequest';
import { BlocklistGetResponse } from './models/BlocklistGetResponse';
import { BlocklistBase } from './models/BlocklistBase';
import { UpdateBlocklistRequest } from './models/UpdateBlocklistRequest';
import { UploadBlocklistContentResponse } from './models/UploadBlocklistContentResponse';
import { UploadBlocklistContentRequest } from './models/UploadBlocklistContentRequest';
import { AddIpsToBlocklistResponse } from './models/AddIpsToBlocklistResponse';
import { AddIpsToBlocklistRequest } from './models/AddIpsToBlocklistRequest';
import { DeleteIpsFromBlocklistRequest } from './models/DeleteIpsFromBlocklistRequest';
import { DownloadBlocklistContentResponse } from './models/DownloadBlocklistContentResponse';
import { BodyDownloadBlocklistContent } from './models/BodyDownloadBlocklistContent';
import { SubscribeBlocklistResponse } from './models/SubscribeBlocklistResponse';
import { SubscribeBlocklistRequest } from './models/SubscribeBlocklistRequest';
import { SubscriptionType } from './models/SubscriptionType';
import { UnsubscribeBlocklistResponse } from './models/UnsubscribeBlocklistResponse';
import { UnsubscribeBlocklistRequest } from './models/UnsubscribeBlocklistRequest';
import { BlocklistSubscribersResponse } from './models/BlocklistSubscribersResponse';
import { ShareBlocklistResponse } from './models/ShareBlocklistResponse';
import { ShareBlocklistRequest } from './models/ShareBlocklistRequest';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class BlocklistsService extends BaseService {
  /**
   * @summary Get Blocklists By Org
   * @description Get blocklists

   * @param organizationId Needed input variable
   * @param optionalParams - Optional parameters
   * @param optionalParams.page - Needed input variable
   * @param optionalParams.pageSize - Needed input variable
   * @param optionalParams.withPublic - Needed input variable
   * @param optionalParams.withOwned - Needed input variable
   * @param optionalParams.withShared - Needed input variable
   * @param optionalParams.subscribedOnly - Needed input variable
   * @returns {Promise<Response<BlocklistsGetResponse>>} - The promise with the result
   */
  async getBlocklists(
    organizationId: string,
    optionalParams: {
      page?: number;
      pageSize?: number;
      withPublic?: boolean;
      withOwned?: boolean;
      withShared?: boolean;
      subscribedOnly?: boolean;
    } = {},
  ): Promise<Response<BlocklistsGetResponse>> {
    const { page, pageSize, withPublic, withOwned, withShared, subscribedOnly } = optionalParams;
    if (organizationId === undefined) {
      throw new Error(
        'The following parameter is required: organizationId, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/orgs/{organization_id}/blocklists';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    if (page) {
      queryParams.push(serializeQuery('form', true, 'page', page));
    }
    if (pageSize) {
      queryParams.push(serializeQuery('form', true, 'page_size', pageSize));
    }
    if (withPublic) {
      queryParams.push(serializeQuery('form', true, 'with_public', withPublic));
    }
    if (withOwned) {
      queryParams.push(serializeQuery('form', true, 'with_owned', withOwned));
    }
    if (withShared) {
      queryParams.push(serializeQuery('form', true, 'with_shared', withShared));
    }
    if (subscribedOnly) {
      queryParams.push(serializeQuery('form', true, 'subscribed_only', subscribedOnly));
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
   * @summary Create Blocklist By Org
   * @description Create a new blocklist

   * @param organizationId Needed input variable
   * @returns {Promise<Response<BlocklistCreateResponse>>} - The promise with the result
   */
  async createBlocklist(
    input: CreateBlocklistRequest,
    organizationId: string,
  ): Promise<Response<BlocklistCreateResponse>> {
    if (organizationId === undefined) {
      throw new Error(
        'The following parameter is required: organizationId, cannot be empty or blank',
      );
    }
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    let urlEndpoint = '/orgs/{organization_id}/blocklists';
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
   * @summary Get Blocklist By Org
   * @description Get blocklist by ID

   * @param organizationId Needed input variable
   * @param blocklistId Needed input variable
   * @param optionalParams - Optional parameters
   * @param optionalParams.withShared - Needed input variable
   * @param optionalParams.withPublic - Needed input variable
   * @returns {Promise<Response<BlocklistGetResponse>>} - The promise with the result
   */
  async getBlocklist(
    organizationId: string,
    blocklistId: string,
    optionalParams: { withShared?: boolean; withPublic?: boolean } = {},
  ): Promise<Response<BlocklistGetResponse>> {
    const { withShared, withPublic } = optionalParams;
    if (organizationId === undefined || blocklistId === undefined) {
      throw new Error(
        'The following are required parameters: organizationId,blocklistId, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/orgs/{organization_id}/blocklists/{blocklist_id}';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{blocklist_id}',
      serializePath('simple', false, blocklistId, undefined),
    );
    if (withShared) {
      queryParams.push(serializeQuery('form', true, 'with_shared', withShared));
    }
    if (withPublic) {
      queryParams.push(serializeQuery('form', true, 'with_public', withPublic));
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
   * @summary Update Blocklist By Org
   * @description Update blocklist by ID

   * @param organizationId Needed input variable
   * @param blocklistId Needed input variable
   * @returns {Promise<Response<BlocklistBase>>} - The promise with the result
   */
  async updateBlocklist(
    input: UpdateBlocklistRequest,
    organizationId: string,
    blocklistId: string,
  ): Promise<Response<BlocklistBase>> {
    if (organizationId === undefined || blocklistId === undefined) {
      throw new Error(
        'The following are required parameters: organizationId,blocklistId, cannot be empty or blank',
      );
    }
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    let urlEndpoint = '/orgs/{organization_id}/blocklists/{blocklist_id}';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{blocklist_id}',
      serializePath('simple', false, blocklistId, undefined),
    );
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
   * @summary Delete Blocklist By Org
   * @description Delete blocklist by ID

   * @param organizationId Needed input variable
   * @param blocklistId Needed input variable
   * @param optionalParams - Optional parameters
   * @param optionalParams.force - Force delete the blocklist
   * @returns {Promise<any>} - The promise with the result
   */
  async deleteBlocklist(
    organizationId: string,
    blocklistId: string,
    optionalParams: { force?: boolean } = {},
  ): Promise<any> {
    const { force } = optionalParams;
    if (organizationId === undefined || blocklistId === undefined) {
      throw new Error(
        'The following are required parameters: organizationId,blocklistId, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/orgs/{organization_id}/blocklists/{blocklist_id}';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{blocklist_id}',
      serializePath('simple', false, blocklistId, undefined),
    );
    if (force) {
      queryParams.push(serializeQuery('form', true, 'force', force));
    }
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.delete(
      finalUrl,
      { force },
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
   * @summary Upload Blocklist Content By Org
   * @description Upload blocklist content by uploading a file

   * @param organizationId Needed input variable
   * @param blocklistId Needed input variable
   * @param optionalParams - Optional parameters
   * @param optionalParams.expiration - Needed input variable
   * @param optionalParams.ignoreInvalidIps - Needed input variable
   * @param optionalParams.overwrite - Needed input variable
   * @returns {Promise<Response<UploadBlocklistContentResponse>>} - The promise with the result
   */
  async uploadBlocklistContent(
    input: UploadBlocklistContentRequest,
    organizationId: string,
    blocklistId: string,
    optionalParams: { expiration?: string; ignoreInvalidIps?: boolean; overwrite?: boolean } = {},
  ): Promise<Response<UploadBlocklistContentResponse>> {
    const { expiration, ignoreInvalidIps, overwrite } = optionalParams;
    if (organizationId === undefined || blocklistId === undefined) {
      throw new Error(
        'The following are required parameters: organizationId,blocklistId, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'multipart/form-data' };
    let urlEndpoint = '/orgs/{organization_id}/blocklists/{blocklist_id}/upload';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{blocklist_id}',
      serializePath('simple', false, blocklistId, undefined),
    );
    if (expiration) {
      queryParams.push(serializeQuery('form', true, 'expiration', expiration));
    }
    if (ignoreInvalidIps) {
      queryParams.push(serializeQuery('form', true, 'ignore_invalid_ips', ignoreInvalidIps));
    }
    if (overwrite) {
      queryParams.push(serializeQuery('form', true, 'overwrite', overwrite));
    }
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const formInput = BlocklistsService.formData(input);
    const response: any = await this.httpClient.post(
      finalUrl,
      formInput,
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
   * @summary Add Ips To Blocklist By Org
   * @description Add IPs to blocklist

   * @param organizationId Needed input variable
   * @param blocklistId Needed input variable
   * @param optionalParams - Optional parameters
   * @param optionalParams.overwrite - Needed input variable
   * @returns {Promise<Response<AddIpsToBlocklistResponse>>} - The promise with the result
   */
  async addIpsToBlocklist(
    input: AddIpsToBlocklistRequest,
    organizationId: string,
    blocklistId: string,
    optionalParams: { overwrite?: boolean } = {},
  ): Promise<Response<AddIpsToBlocklistResponse>> {
    const { overwrite } = optionalParams;
    if (organizationId === undefined || blocklistId === undefined) {
      throw new Error(
        'The following are required parameters: organizationId,blocklistId, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    let urlEndpoint = '/orgs/{organization_id}/blocklists/{blocklist_id}/ips';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{blocklist_id}',
      serializePath('simple', false, blocklistId, undefined),
    );
    if (overwrite) {
      queryParams.push(serializeQuery('form', true, 'overwrite', overwrite));
    }
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
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
   * @summary Delete Ips From Blocklist By Org
   * @description Delete IPs from blocklist

   * @param organizationId Needed input variable
   * @param blocklistId Needed input variable
   * @returns {Promise<any>} - The promise with the result
   */
  async deleteIpsFromBlocklist(
    input: DeleteIpsFromBlocklistRequest,
    organizationId: string,
    blocklistId: string,
  ): Promise<any> {
    if (organizationId === undefined || blocklistId === undefined) {
      throw new Error(
        'The following are required parameters: organizationId,blocklistId, cannot be empty or blank',
      );
    }
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    let urlEndpoint = '/orgs/{organization_id}/blocklists/{blocklist_id}/ips/delete';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{blocklist_id}',
      serializePath('simple', false, blocklistId, undefined),
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
   * @summary Download Blocklist Content By Org
   * @description Download blocklist content

   * @param organizationId Needed input variable
   * @param blocklistId Needed input variable
   * @returns {Promise<Response<DownloadBlocklistContentResponse>>} - The promise with the result
   */
  async downloadBlocklistContent(
    input: BodyDownloadBlocklistContent,
    organizationId: string,
    blocklistId: string,
  ): Promise<Response<DownloadBlocklistContentResponse>> {
    if (organizationId === undefined || blocklistId === undefined) {
      throw new Error(
        'The following are required parameters: organizationId,blocklistId, cannot be empty or blank',
      );
    }
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    let urlEndpoint = '/orgs/{organization_id}/blocklists/{blocklist_id}/download';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{blocklist_id}',
      serializePath('simple', false, blocklistId, undefined),
    );
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}`);
    const response: any = await this.httpClient.get(
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
   * @summary Subscribe Blocklist By Org
   * @description Subscribe to blocklist

   * @param organizationId Needed input variable
   * @param blocklistId Needed input variable
   * @returns {Promise<Response<SubscribeBlocklistResponse>>} - The promise with the result
   */
  async subscribeBlocklist(
    input: SubscribeBlocklistRequest,
    organizationId: string,
    blocklistId: string,
  ): Promise<Response<SubscribeBlocklistResponse>> {
    if (organizationId === undefined || blocklistId === undefined) {
      throw new Error(
        'The following are required parameters: organizationId,blocklistId, cannot be empty or blank',
      );
    }
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    let urlEndpoint = '/orgs/{organization_id}/blocklists/{blocklist_id}/subscribe';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{blocklist_id}',
      serializePath('simple', false, blocklistId, undefined),
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
   * @summary Unsubscribe Blocklist By Org
   * @description Unsubscribe from blocklist

   * @param organizationId Needed input variable
   * @param blocklistId Needed input variable
   * @param optionalParams - Optional parameters
   * @param optionalParams._subscriptionType - Needed input variable
   * @returns {Promise<Response<UnsubscribeBlocklistResponse>>} - The promise with the result
   */
  async unsubscribeBlocklist(
    input: UnsubscribeBlocklistRequest,
    organizationId: string,
    blocklistId: string,
    optionalParams: { _subscriptionType?: SubscriptionType } = {},
  ): Promise<Response<UnsubscribeBlocklistResponse>> {
    const { _subscriptionType } = optionalParams;
    if (organizationId === undefined || blocklistId === undefined) {
      throw new Error(
        'The following are required parameters: organizationId,blocklistId, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    let urlEndpoint = '/orgs/{organization_id}/blocklists/{blocklist_id}/unsubscribe';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{blocklist_id}',
      serializePath('simple', false, blocklistId, undefined),
    );
    if (_subscriptionType) {
      queryParams.push(serializeQuery('form', true, '_subscription_type', _subscriptionType));
    }
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
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
   * @summary Get Blocklist Subscribers By Org
   * @description Get blocklist subscribers

   * @param organizationId Needed input variable
   * @param blocklistId Needed input variable
   * @returns {Promise<Response<BlocklistSubscribersResponse>>} - The promise with the result
   */
  async getBlocklistSubscribers(
    organizationId: string,
    blocklistId: string,
  ): Promise<Response<BlocklistSubscribersResponse>> {
    if (organizationId === undefined || blocklistId === undefined) {
      throw new Error(
        'The following are required parameters: organizationId,blocklistId, cannot be empty or blank',
      );
    }
    let urlEndpoint = '/orgs/{organization_id}/blocklists/{blocklist_id}/subscribers';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{blocklist_id}',
      serializePath('simple', false, blocklistId, undefined),
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
   * @summary Share Blocklist By Org
   * @description Share blocklist with organizations

   * @param organizationId Needed input variable
   * @param blocklistId Needed input variable
   * @returns {Promise<Response<ShareBlocklistResponse>>} - The promise with the result
   */
  async shareBlocklist(
    input: ShareBlocklistRequest,
    organizationId: string,
    blocklistId: string,
  ): Promise<Response<ShareBlocklistResponse>> {
    if (organizationId === undefined || blocklistId === undefined) {
      throw new Error(
        'The following are required parameters: organizationId,blocklistId, cannot be empty or blank',
      );
    }
    const headers: { [key: string]: string } = { 'Content-type': 'application/json' };
    let urlEndpoint = '/orgs/{organization_id}/blocklists/{blocklist_id}/shares';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{blocklist_id}',
      serializePath('simple', false, blocklistId, undefined),
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
   * @summary Unshare Blocklist By Org
   * @description Unshare blocklist with organizations

   * @param organizationId Needed input variable
   * @param blocklistId Needed input variable
   * @param unshareOrganizationId Needed input variable
   * @param optionalParams - Optional parameters
   * @param optionalParams.force - Force delete the blocklist
   * @returns {Promise<any>} - The promise with the result
   */
  async unshareBlocklist(
    organizationId: string,
    blocklistId: string,
    unshareOrganizationId: string,
    optionalParams: { force?: boolean } = {},
  ): Promise<any> {
    const { force } = optionalParams;
    if (
      organizationId === undefined ||
      blocklistId === undefined ||
      unshareOrganizationId === undefined
    ) {
      throw new Error(
        'The following are required parameters: organizationId,blocklistId,unshareOrganizationId, cannot be empty or blank',
      );
    }
    const queryParams: string[] = [];
    let urlEndpoint =
      '/orgs/{organization_id}/blocklists/{blocklist_id}/shares/{unshare_organization_id}';
    urlEndpoint = urlEndpoint.replace(
      '{organization_id}',
      serializePath('simple', false, organizationId, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{blocklist_id}',
      serializePath('simple', false, blocklistId, undefined),
    );
    urlEndpoint = urlEndpoint.replace(
      '{unshare_organization_id}',
      serializePath('simple', false, unshareOrganizationId, undefined),
    );
    if (force) {
      queryParams.push(serializeQuery('form', true, 'force', force));
    }
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl + urlEndpoint}${urlParams}`);
    const response: any = await this.httpClient.delete(
      finalUrl,
      { force },
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
