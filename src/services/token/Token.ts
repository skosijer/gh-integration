import BaseService from '../../BaseService';

import { FindTokensByUserIdResponse } from './models/FindTokensByUserIdResponse';
import { CreateTokenResponse } from './models/CreateTokenResponse';
import { CreateTokenRequest } from './models/CreateTokenRequest';
import { GetTokenResponse } from './models/GetTokenResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class TokenService extends BaseService {


  async findTokensByUserId(userId: number): Promise<FindTokensByUserIdResponse> {
    if( userId === undefined ){
      throw new Error('The following parameter is required: userId, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(userId) {
    queryParams.push(serializeQuery('form', true, 'userId', userId)) }
    const urlEndpoint = '/auth/tokens';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}?${queryParams.join('&')}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as FindTokensByUserIdResponse;
    return responseModel;
  }


  async createToken(input: CreateTokenRequest): Promise<CreateTokenResponse> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/auth/tokens';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as CreateTokenResponse;
    return responseModel;
  }








  async getTokenById(id: number): Promise<GetTokenResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/auth/tokens/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as GetTokenResponse;
    return responseModel;
  }





  async removeToken(id: number): Promise<any> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/auth/tokens/{id}';
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