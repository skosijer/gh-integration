import BaseService from '../../BaseService';

import { CurrentUserResponse } from './models/CurrentUserResponse';
import { UserSortBy } from './models/UserSortBy';
import { UserDirection } from './models/UserDirection';
import { UsersResponse } from './models/UsersResponse';
import { UserResponse } from '../common/UserResponse';
import { CreateUserRequest } from './models/CreateUserRequest';
import { EditUserRequest } from './models/EditUserRequest';
import { EmailSubscriptionRequest } from './models/EmailSubscriptionRequest';
import { PaginatedOrgResponse } from './models/PaginatedOrgResponse';
import { GetUserApisResponse } from './models/GetUserApisResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class UserService extends BaseService {


  async getCurrentUser(): Promise<CurrentUserResponse> {

    const urlEndpoint = '/users/current-user';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as CurrentUserResponse;
    return responseModel;
  }









  async getUsers(offset: number, limit: number, optionalParams: { orgId?: number, email?: string, firstName?: string, lastName?: string, orgIds?: number[], sortBy?: UserSortBy, direction?: UserDirection } = {}): Promise<UsersResponse> {
    const { orgId, email, firstName, lastName, orgIds, sortBy, direction } = optionalParams;
    if( offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    if(orgId) {
    queryParams.push(serializeQuery('form', true, 'orgId', orgId)) }
    if(email) {
    queryParams.push(serializeQuery('form', true, 'email', email)) }
    if(firstName) {
    queryParams.push(serializeQuery('form', true, 'firstName', firstName)) }
    if(lastName) {
    queryParams.push(serializeQuery('form', true, 'lastName', lastName)) }
    if(orgIds) {
    queryParams.push(serializeQuery('form', true, 'orgIds', orgIds)) }
    if(sortBy) {
    queryParams.push(serializeQuery('form', true, 'sortBy', sortBy)) }
    if(direction) {
    queryParams.push(serializeQuery('form', true, 'direction', direction)) }
    const urlEndpoint = '/users';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}${urlParams}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as UsersResponse;
    return responseModel;
  }


  async createUser(input: CreateUserRequest): Promise<UserResponse> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/users';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as UserResponse;
    return responseModel;
  }








  async getUserById(id: number): Promise<UserResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/users/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as UserResponse;
    return responseModel;
  }




  async updateUser(input: EditUserRequest, id: number): Promise<UserResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    let urlEndpoint = '/users/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.patch(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as UserResponse;
    return responseModel;
  }


  async removeUser(id: number): Promise<any> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/users/{id}';
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








  async updateEmailSubscription(input: EmailSubscriptionRequest): Promise<any> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/users/emails/subscriptions';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.patch(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data;
    return responseModel;
  }






  async getUserOrgs(offset: number, limit: number): Promise<PaginatedOrgResponse> {
    if( offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    const urlEndpoint = '/users/orgs';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}?${queryParams.join('&')}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as PaginatedOrgResponse;
    return responseModel;
  }









  async getUserApis(): Promise<GetUserApisResponse> {

    const urlEndpoint = '/users/apis';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as GetUserApisResponse;
    return responseModel;
  }









}