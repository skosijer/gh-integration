import BaseService from '../../BaseService';

import { SdkSortBy } from './models/SdkSortBy';
import { Direction } from '../common/Direction';
import { PaginatedSdkResponse } from '../common/PaginatedSdkResponse';
import { SdkResponse } from '../common/SdkResponse';
import { CreateSdkRequest } from './models/CreateSdkRequest';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class SdkService extends BaseService {


  async findSdks(offset: number, limit: number, artifactId: number, optionalParams: { sortBy?: SdkSortBy, direction?: Direction } = {}): Promise<PaginatedSdkResponse> {
    const { sortBy, direction } = optionalParams;
    if( offset === undefined||limit === undefined||artifactId === undefined ){
      throw new Error('The following are required parameters: offset,limit,artifactId, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    if(artifactId) {
    queryParams.push(serializeQuery('form', true, 'artifactId', artifactId)) }
    if(sortBy) {
    queryParams.push(serializeQuery('form', true, 'sortBy', sortBy)) }
    if(direction) {
    queryParams.push(serializeQuery('form', true, 'direction', direction)) }
    const urlEndpoint = '/sdks';
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


  async createSdk(input: CreateSdkRequest): Promise<SdkResponse> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/sdks';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as SdkResponse;
    return responseModel;
  }








  async getSdkById(id: number): Promise<SdkResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/sdks/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as SdkResponse;
    return responseModel;
  }





  async removeSdk(id: number): Promise<any> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/sdks/{id}';
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





}