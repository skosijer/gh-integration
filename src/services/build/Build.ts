import BaseService from '../../BaseService';

import { PaginatedBuildResponse } from '../common/PaginatedBuildResponse';
import { BuildResponse } from '../common/BuildResponse';
import { CreateBuildRequest } from './models/CreateBuildRequest';
import { GetBuildStatusesResponse } from './models/GetBuildStatusesResponse';
import { GetBuildByIdResponse } from './models/GetBuildByIdResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class BuildService extends BaseService {


  async getBuilds(offset: number, limit: number, orgId: number, apiSlug: string): Promise<PaginatedBuildResponse> {
    if( offset === undefined||limit === undefined||orgId === undefined||apiSlug === undefined ){
      throw new Error('The following are required parameters: offset,limit,orgId,apiSlug, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    if(orgId) {
    queryParams.push(serializeQuery('form', true, 'orgId', orgId)) }
    if(apiSlug) {
    queryParams.push(serializeQuery('form', true, 'apiSlug', apiSlug)) }
    const urlEndpoint = '/builds';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}?${queryParams.join('&')}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as PaginatedBuildResponse;
    return responseModel;
  }


  async createBuild(input: CreateBuildRequest): Promise<BuildResponse> {

    const headers: { [key: string]: string } = {'Content-Type' : 'multipart/form-data'};
    const urlEndpoint = '/builds';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
const formInput = BuildService.formData(input)
    const response:any = await this.httpClient.post(
      finalUrl,
      formInput,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as BuildResponse;
    return responseModel;
  }








  async getBuildStatuses(): Promise<GetBuildStatusesResponse> {

    const urlEndpoint = '/builds/statuses';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as GetBuildStatusesResponse;
    return responseModel;
  }









  async getById(id: number): Promise<GetBuildByIdResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/builds/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as GetBuildByIdResponse;
    return responseModel;
  }










  async tag(buildId: number, tagId: number): Promise<any> {
    if( buildId === undefined||tagId === undefined ){
      throw new Error('The following are required parameters: buildId,tagId, cannot be empty or blank')
    }
    let urlEndpoint = '/builds/{buildId}/tag/{tagId}';
    urlEndpoint = urlEndpoint.replace('{buildId}', serializePath('simple', false,  buildId, undefined));
    urlEndpoint = urlEndpoint.replace('{tagId}', serializePath('simple', false,  tagId, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data;
    return responseModel;
  }









  async untag(buildId: number, tagId: number): Promise<any> {
    if( buildId === undefined||tagId === undefined ){
      throw new Error('The following are required parameters: buildId,tagId, cannot be empty or blank')
    }
    let urlEndpoint = '/builds/{buildId}/untag/{tagId}';
    urlEndpoint = urlEndpoint.replace('{buildId}', serializePath('simple', false,  buildId, undefined));
    urlEndpoint = urlEndpoint.replace('{tagId}', serializePath('simple', false,  tagId, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data;
    return responseModel;
  }











  async approveBuild(buildId: number): Promise<any> {
    if( buildId === undefined ){
      throw new Error('The following parameter is required: buildId, cannot be empty or blank')
    }
    let urlEndpoint = '/builds/{buildId}/approve';
    urlEndpoint = urlEndpoint.replace('{buildId}', serializePath('simple', false,  buildId, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.patch(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data;
    return responseModel;
  }









  async unApproveBuild(buildId: number): Promise<any> {
    if( buildId === undefined ){
      throw new Error('The following parameter is required: buildId, cannot be empty or blank')
    }
    let urlEndpoint = '/builds/{buildId}/unapprove';
    urlEndpoint = urlEndpoint.replace('{buildId}', serializePath('simple', false,  buildId, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.patch(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data;
    return responseModel;
  }






}