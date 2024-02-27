import BaseService from '../../BaseService';

import { OrgMemberSortBy } from './models/OrgMemberSortBy';
import { Direction } from '../common/Direction';
import { PaginatedOrgMemberResponse } from './models/PaginatedOrgMemberResponse';
import { OrgMemberResponse } from '../common/OrgMemberResponse';
import { CreateOrgMemberRequest } from './models/CreateOrgMemberRequest';
import { UpdateOrgMemberRequest } from './models/UpdateOrgMemberRequest';
import { UpdateManyOrgMembersResponse } from './models/UpdateManyOrgMembersResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class OrgMemberService extends BaseService {


  async getByOrgId(orgId: number, offset: number, limit: number, optionalParams: { email?: string, firstName?: string, lastName?: string, sortBy?: OrgMemberSortBy, direction?: Direction } = {}): Promise<PaginatedOrgMemberResponse> {
    const { email, firstName, lastName, sortBy, direction } = optionalParams;
    if( orgId === undefined||offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: orgId,offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/orgs/{orgId}/members';
    urlEndpoint = urlEndpoint.replace('{orgId}', serializePath('simple', false,  orgId, undefined));
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    if(email) {
    queryParams.push(serializeQuery('form', true, 'email', email)) }
    if(firstName) {
    queryParams.push(serializeQuery('form', true, 'firstName', firstName)) }
    if(lastName) {
    queryParams.push(serializeQuery('form', true, 'lastName', lastName)) }
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
    const responseModel = response.data as PaginatedOrgMemberResponse;
    return responseModel;
  }


  async createMember(input: CreateOrgMemberRequest, orgId: number): Promise<OrgMemberResponse> {
    if( orgId === undefined ){
      throw new Error('The following parameter is required: orgId, cannot be empty or blank')
    }
    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    let urlEndpoint = '/orgs/{orgId}/members';
    urlEndpoint = urlEndpoint.replace('{orgId}', serializePath('simple', false,  orgId, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as OrgMemberResponse;
    return responseModel;
  }











  async updateMember(input: UpdateOrgMemberRequest, userId: number, orgId: number): Promise<OrgMemberResponse> {
    if( userId === undefined||orgId === undefined ){
      throw new Error('The following are required parameters: userId,orgId, cannot be empty or blank')
    }
    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    let urlEndpoint = '/orgs/{orgId}/members/{userId}';
    urlEndpoint = urlEndpoint.replace('{userId}', serializePath('simple', false,  userId, undefined));
    urlEndpoint = urlEndpoint.replace('{orgId}', serializePath('simple', false,  orgId, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.patch(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as OrgMemberResponse;
    return responseModel;
  }


  async removeMember(userId: number, orgId: number): Promise<any> {
    if( userId === undefined||orgId === undefined ){
      throw new Error('The following are required parameters: userId,orgId, cannot be empty or blank')
    }
    let urlEndpoint = '/orgs/{orgId}/members/{userId}';
    urlEndpoint = urlEndpoint.replace('{userId}', serializePath('simple', false,  userId, undefined));
    urlEndpoint = urlEndpoint.replace('{orgId}', serializePath('simple', false,  orgId, undefined));
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









  async leaveOrg(orgId: number): Promise<any> {
    if( orgId === undefined ){
      throw new Error('The following parameter is required: orgId, cannot be empty or blank')
    }
    let urlEndpoint = '/orgs/{orgId}/leave';
    urlEndpoint = urlEndpoint.replace('{orgId}', serializePath('simple', false,  orgId, undefined));
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








  async enableAllMembers(orgId: number): Promise<UpdateManyOrgMembersResponse> {
    if( orgId === undefined ){
      throw new Error('The following parameter is required: orgId, cannot be empty or blank')
    }
    let urlEndpoint = '/orgs/{orgId}/enable';
    urlEndpoint = urlEndpoint.replace('{orgId}', serializePath('simple', false,  orgId, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.patch(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as UpdateManyOrgMembersResponse;
    return responseModel;
  }









  async disableAllMembers(orgId: number): Promise<UpdateManyOrgMembersResponse> {
    if( orgId === undefined ){
      throw new Error('The following parameter is required: orgId, cannot be empty or blank')
    }
    let urlEndpoint = '/orgs/{orgId}/disable';
    urlEndpoint = urlEndpoint.replace('{orgId}', serializePath('simple', false,  orgId, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.patch(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as UpdateManyOrgMembersResponse;
    return responseModel;
  }






}