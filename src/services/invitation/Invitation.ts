import BaseService from '../../BaseService';

import { InvitationResponse } from './models/InvitationResponse';
import { CreateOrgInvitationRequest } from './models/CreateOrgInvitationRequest';
import { PaginatedOrgInvitesResponse } from './models/PaginatedOrgInvitesResponse';
import { Status } from './models/Status';
import { InvitationSortBy } from './models/InvitationSortBy';
import { InvitationDirection } from './models/InvitationDirection';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class InvitationService extends BaseService {



  async createOrgInvite(input: CreateOrgInvitationRequest, orgId: number): Promise<InvitationResponse> {
    if( orgId === undefined ){
      throw new Error('The following parameter is required: orgId, cannot be empty or blank')
    }
    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    let urlEndpoint = '/invitations/org/{orgId}/invite';
    urlEndpoint = urlEndpoint.replace('{orgId}', serializePath('simple', false,  orgId, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as InvitationResponse;
    return responseModel;
  }











  async redeemInvite(inviteCode: string): Promise<InvitationResponse> {
    if( inviteCode === undefined ){
      throw new Error('The following parameter is required: inviteCode, cannot be empty or blank')
    }
    let urlEndpoint = '/invitations/{inviteCode}/redeem';
    urlEndpoint = urlEndpoint.replace('{inviteCode}', serializePath('simple', false,  inviteCode, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.patch(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as InvitationResponse;
    return responseModel;
  }









  async declineInvite(inviteCode: string): Promise<InvitationResponse> {
    if( inviteCode === undefined ){
      throw new Error('The following parameter is required: inviteCode, cannot be empty or blank')
    }
    let urlEndpoint = '/invitations/{inviteCode}/decline';
    urlEndpoint = urlEndpoint.replace('{inviteCode}', serializePath('simple', false,  inviteCode, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.patch(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as InvitationResponse;
    return responseModel;
  }






  async getReceivedInvites(offset: number, limit: number): Promise<PaginatedOrgInvitesResponse> {
    if( offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    const urlEndpoint = '/invitations/received';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}?${queryParams.join('&')}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as PaginatedOrgInvitesResponse;
    return responseModel;
  }









  async getSentInvites(offset: number, limit: number): Promise<PaginatedOrgInvitesResponse> {
    if( offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    const urlEndpoint = '/invitations/sent';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}?${queryParams.join('&')}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as PaginatedOrgInvitesResponse;
    return responseModel;
  }









  async searchInvites(offset: number, limit: number, optionalParams: { orgName?: string, status?: Status, sortBy?: InvitationSortBy, direction?: InvitationDirection } = {}): Promise<PaginatedOrgInvitesResponse> {
    const { orgName, status, sortBy, direction } = optionalParams;
    if( offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    if(orgName) {
    queryParams.push(serializeQuery('form', true, 'orgName', orgName)) }
    if(status) {
    queryParams.push(serializeQuery('form', true, 'status', status)) }
    if(sortBy) {
    queryParams.push(serializeQuery('form', true, 'sortBy', sortBy)) }
    if(direction) {
    queryParams.push(serializeQuery('form', true, 'direction', direction)) }
    const urlEndpoint = '/invitations/search';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}${urlParams}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as PaginatedOrgInvitesResponse;
    return responseModel;
  }









  async getInviteByCode(inviteCode: string): Promise<InvitationResponse> {
    if( inviteCode === undefined ){
      throw new Error('The following parameter is required: inviteCode, cannot be empty or blank')
    }
    let urlEndpoint = '/invitations/{inviteCode}';
    urlEndpoint = urlEndpoint.replace('{inviteCode}', serializePath('simple', false,  inviteCode, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as InvitationResponse;
    return responseModel;
  }









}