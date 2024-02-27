import BaseService from '../../BaseService';

import { SortBy } from './models/SortBy';
import { Direction } from '../common/Direction';
import { PaginatedBuildResponse } from '../common/PaginatedBuildResponse';
import { GetApiBuildTagsResponse } from './models/GetApiBuildTagsResponse';
import { ApiSortBy } from './models/ApiSortBy';
import { PaginatedSdkResponse } from '../common/PaginatedSdkResponse';
import { PaginatedDocResponse } from '../common/PaginatedDocResponse';
import { GetApisResponse } from './models/GetApisResponse';
import { ApiResponse } from '../common/ApiResponse';
import { CreateApiRequest } from './models/CreateApiRequest';
import { ApiDirection } from './models/ApiDirection';
import { ApisSearchPaginatedResponse } from './models/ApisSearchPaginatedResponse';
import { UpdateApiRequest } from './models/UpdateApiRequest';
import { GetApiMembersResponse } from './models/GetApiMembersResponse';
import { GetApiByOrgSlugAndApiSlugResponse } from './models/GetApiByOrgSlugAndApiSlugResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class ApiService extends BaseService {


  async getApiBuilds(id: number, offset: number, limit: number, optionalParams: { sortBy?: SortBy, direction?: Direction, statuses?: string[], tags?: number[], createdByIds?: number[] } = {}): Promise<PaginatedBuildResponse> {
    const { sortBy, direction, statuses, tags, createdByIds } = optionalParams;
    if( id === undefined||offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: id,offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/apis/{id}/builds';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    if(sortBy) {
    queryParams.push(serializeQuery('form', true, 'sortBy', sortBy)) }
    if(direction) {
    queryParams.push(serializeQuery('form', true, 'direction', direction)) }
    if(statuses) {
    queryParams.push(serializeQuery('form', true, 'statuses', statuses)) }
    if(tags) {
    queryParams.push(serializeQuery('form', true, 'tags', tags)) }
    if(createdByIds) {
    queryParams.push(serializeQuery('form', true, 'createdByIds', createdByIds)) }
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}${urlParams}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as PaginatedBuildResponse;
    return responseModel;
  }









  async getApiBuildTags(id: number): Promise<GetApiBuildTagsResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/apis/{id}/builds/tags';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as GetApiBuildTagsResponse;
    return responseModel;
  }









  async getApiSdks(id: number, offset: number, limit: number, optionalParams: { statuses?: string[], tags?: number[], createdByIds?: number[], languages?: string[], sortBy?: ApiSortBy, direction?: Direction } = {}): Promise<PaginatedSdkResponse> {
    const { statuses, tags, createdByIds, languages, sortBy, direction } = optionalParams;
    if( id === undefined||offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: id,offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/apis/{id}/sdks';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    if(statuses) {
    queryParams.push(serializeQuery('form', true, 'statuses', statuses)) }
    if(tags) {
    queryParams.push(serializeQuery('form', true, 'tags', tags)) }
    if(createdByIds) {
    queryParams.push(serializeQuery('form', true, 'createdByIds', createdByIds)) }
    if(languages) {
    queryParams.push(serializeQuery('form', true, 'languages', languages)) }
    if(sortBy) {
    queryParams.push(serializeQuery('form', true, 'sortBy', sortBy)) }
    if(direction) {
    queryParams.push(serializeQuery('form', true, 'direction', direction)) }
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}${urlParams}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as PaginatedSdkResponse;
    return responseModel;
  }









  async getApiDocs(id: number, offset: number, limit: number, optionalParams: { sortBy?: ApiSortBy, direction?: Direction, statuses?: string[], tags?: number[], createdByIds?: number[] } = {}): Promise<PaginatedDocResponse> {
    const { sortBy, direction, statuses, tags, createdByIds } = optionalParams;
    if( id === undefined||offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: id,offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/apis/{id}/docs';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    if(sortBy) {
    queryParams.push(serializeQuery('form', true, 'sortBy', sortBy)) }
    if(direction) {
    queryParams.push(serializeQuery('form', true, 'direction', direction)) }
    if(statuses) {
    queryParams.push(serializeQuery('form', true, 'statuses', statuses)) }
    if(tags) {
    queryParams.push(serializeQuery('form', true, 'tags', tags)) }
    if(createdByIds) {
    queryParams.push(serializeQuery('form', true, 'createdByIds', createdByIds)) }
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}${urlParams}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as PaginatedDocResponse;
    return responseModel;
  }









  async getApis(orgId: number, optionalParams: { apiSlug?: string } = {}): Promise<GetApisResponse> {
    const { apiSlug } = optionalParams;
    if( orgId === undefined ){
      throw new Error('The following parameter is required: orgId, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(orgId) {
    queryParams.push(serializeQuery('form', true, 'orgId', orgId)) }
    if(apiSlug) {
    queryParams.push(serializeQuery('form', true, 'apiSlug', apiSlug)) }
    const urlEndpoint = '/apis';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}${urlParams}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as GetApisResponse;
    return responseModel;
  }


  async createApi(input: CreateApiRequest): Promise<ApiResponse> {

    const headers: { [key: string]: string } = {'Content-Type' : 'multipart/form-data'};
    const urlEndpoint = '/apis';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
const formInput = ApiService.formData(input)
    const response:any = await this.httpClient.post(
      finalUrl,
      formInput,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as ApiResponse;
    return responseModel;
  }








  async searchApis(offset: number, limit: number, optionalParams: { name?: string, sortBy?: ApiSortBy, orgId?: number, direction?: ApiDirection, orgIds?: number[] } = {}): Promise<ApisSearchPaginatedResponse> {
    const { name, sortBy, orgId, direction, orgIds } = optionalParams;
    if( offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    if(name) {
    queryParams.push(serializeQuery('form', true, 'name', name)) }
    if(sortBy) {
    queryParams.push(serializeQuery('form', true, 'sortBy', sortBy)) }
    if(orgId) {
    queryParams.push(serializeQuery('form', true, 'orgId', orgId)) }
    if(direction) {
    queryParams.push(serializeQuery('form', true, 'direction', direction)) }
    if(orgIds) {
    queryParams.push(serializeQuery('form', true, 'orgIds', orgIds)) }
    const urlEndpoint = '/apis/search';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}${urlParams}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as ApisSearchPaginatedResponse;
    return responseModel;
  }









  async getApiById(id: number): Promise<ApiResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/apis/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as ApiResponse;
    return responseModel;
  }




  async updateApi(input: UpdateApiRequest, id: number): Promise<ApiResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    let urlEndpoint = '/apis/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.patch(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as ApiResponse;
    return responseModel;
  }


  async removeApi(id: number): Promise<any> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/apis/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.delete(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data;
    return responseModel;
  }





  async getApiMembers(id: number): Promise<GetApiMembersResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/apis/{id}/members';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as GetApiMembersResponse;
    return responseModel;
  }









  async getApiByOrgSlugAndApiSlug(orgSlug: string, apiSlug: string): Promise<GetApiByOrgSlugAndApiSlugResponse> {
    if( orgSlug === undefined||apiSlug === undefined ){
      throw new Error('The following are required parameters: orgSlug,apiSlug, cannot be empty or blank')
    }
    let urlEndpoint = '/apis/{orgSlug}/{apiSlug}';
    urlEndpoint = urlEndpoint.replace('{orgSlug}', serializePath('simple', false,  orgSlug, undefined));
    urlEndpoint = urlEndpoint.replace('{apiSlug}', serializePath('simple', false,  apiSlug, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as GetApiByOrgSlugAndApiSlugResponse;
    return responseModel;
  }









}