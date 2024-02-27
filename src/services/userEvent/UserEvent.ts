import BaseService from '../../BaseService';

import { UserEventSortBy } from './models/UserEventSortBy';
import { UserEventDirection } from './models/UserEventDirection';
import { PaginatedUserEventsResponse } from './models/PaginatedUserEventsResponse';
import { ExportUserEventsToCsvResponse } from './models/ExportUserEventsToCsvResponse';
import { EventUserPublishPrRequest } from './models/EventUserPublishPrRequest';

import { serializeQuery } from '../../http/QuerySerializer';

export class UserEventService extends BaseService {


  async getUserEvents(offset: number, limit: number, optionalParams: { email?: string, orgId?: number, sortBy?: UserEventSortBy, direction?: UserEventDirection, orgIds?: number[], eventIds?: number[] } = {}): Promise<PaginatedUserEventsResponse> {
    const { email, orgId, sortBy, direction, orgIds, eventIds } = optionalParams;
    if( offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    if(email) {
    queryParams.push(serializeQuery('form', true, 'email', email)) }
    if(orgId) {
    queryParams.push(serializeQuery('form', true, 'orgId', orgId)) }
    if(sortBy) {
    queryParams.push(serializeQuery('form', true, 'sortBy', sortBy)) }
    if(direction) {
    queryParams.push(serializeQuery('form', true, 'direction', direction)) }
    if(orgIds) {
    queryParams.push(serializeQuery('form', true, 'orgIds', orgIds)) }
    if(eventIds) {
    queryParams.push(serializeQuery('form', true, 'eventIds', eventIds)) }
    const urlEndpoint = '/user-events';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}${urlParams}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as PaginatedUserEventsResponse;
    return responseModel;
  }









  async exportUserEventsToCsv(optionalParams: { email?: string, orgId?: number, filename?: string, orgIds?: number[], eventIds?: number[] } = {}): Promise<ExportUserEventsToCsvResponse> {
    const { email, orgId, filename, orgIds, eventIds } = optionalParams;

    const queryParams: string[] = [];
    if(email) {
    queryParams.push(serializeQuery('form', true, 'email', email)) }
    if(orgId) {
    queryParams.push(serializeQuery('form', true, 'orgId', orgId)) }
    if(filename) {
    queryParams.push(serializeQuery('form', true, 'filename', filename)) }
    if(orgIds) {
    queryParams.push(serializeQuery('form', true, 'orgIds', orgIds)) }
    if(eventIds) {
    queryParams.push(serializeQuery('form', true, 'eventIds', eventIds)) }
    const urlEndpoint = '/user-events/export-to-csv';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}${urlParams}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as ExportUserEventsToCsvResponse;
    return responseModel;
  }










  async trackUserPublishPrEvent(input: EventUserPublishPrRequest): Promise<any> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/user-events/track-user-publish-pr-event';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data;
    return responseModel;
  }








}