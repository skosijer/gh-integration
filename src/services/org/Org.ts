import BaseService from '../../BaseService';

import { Direction } from '../common/Direction';
import { OrgSortBy } from './models/OrgSortBy';
import { AdminPaginatedOrgResponse } from './models/AdminPaginatedOrgResponse';
import { OrgResponse } from '../common/OrgResponse';
import { CreateOrgRequest } from './models/CreateOrgRequest';
import { EditOrgRequest } from './models/EditOrgRequest';
import { GetApisByOrgResponse } from './models/GetApisByOrgResponse';
import { PaginatedOrgJobsResponseWithTotalCount } from './models/PaginatedOrgJobsResponseWithTotalCount';
import { GetDocsByOrgResponse } from './models/GetDocsByOrgResponse';
import { PaginatedOrgBuildsWithJobsResponseWithTotalCount } from './models/PaginatedOrgBuildsWithJobsResponseWithTotalCount';
import { GetOrgApiBuildsResponse } from './models/GetOrgApiBuildsResponse';
import { OrgDirection } from './models/OrgDirection';
import { ArtifactTypes } from './models/ArtifactTypes';
import { OrgStatuses } from './models/OrgStatuses';
import { PaginatedOrgArtifactsResponse } from './models/PaginatedOrgArtifactsResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class OrgService extends BaseService {


  async getOrgs(offset: number, limit: number, optionalParams: { direction?: Direction, sortBy?: OrgSortBy } = {}): Promise<AdminPaginatedOrgResponse> {
    const { direction, sortBy } = optionalParams;
    if( offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    if(direction) {
    queryParams.push(serializeQuery('form', true, 'direction', direction)) }
    if(sortBy) {
    queryParams.push(serializeQuery('form', true, 'sortBy', sortBy)) }
    const urlEndpoint = '/orgs';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}${urlParams}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as AdminPaginatedOrgResponse;
    return responseModel;
  }


  async createOrg(input: CreateOrgRequest): Promise<OrgResponse> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/orgs';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as OrgResponse;
    return responseModel;
  }








  async searchOrgs(offset: number, limit: number, optionalParams: { website?: string, domain?: string, name?: string } = {}): Promise<AdminPaginatedOrgResponse> {
    const { website, domain, name } = optionalParams;
    if( offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    if(website) {
    queryParams.push(serializeQuery('form', true, 'website', website)) }
    if(domain) {
    queryParams.push(serializeQuery('form', true, 'domain', domain)) }
    if(name) {
    queryParams.push(serializeQuery('form', true, 'name', name)) }
    const urlEndpoint = '/orgs/search';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}${urlParams}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as AdminPaginatedOrgResponse;
    return responseModel;
  }









  async getOrgById(id: number): Promise<OrgResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/orgs/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as OrgResponse;
    return responseModel;
  }




  async updateOrg(input: EditOrgRequest, id: number): Promise<OrgResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    let urlEndpoint = '/orgs/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.patch(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as OrgResponse;
    return responseModel;
  }


  async removeOrg(id: number): Promise<any> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/orgs/{id}';
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





  async getApisByOrg(id: number): Promise<GetApisByOrgResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/orgs/{id}/apis';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as GetApisByOrgResponse;
    return responseModel;
  }









  async getOrgJobs(id: number, offset: number, limit: number, optionalParams: { sortBy?: OrgSortBy, direction?: Direction, statuses?: string[], createdByIds?: number[], apiSlug?: string, apiVersion?: string, buildType?: string[] } = {}): Promise<PaginatedOrgJobsResponseWithTotalCount> {
    const { sortBy, direction, statuses, createdByIds, apiSlug, apiVersion, buildType } = optionalParams;
    if( id === undefined||offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: id,offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/orgs/{id}/jobs';
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
    if(createdByIds) {
    queryParams.push(serializeQuery('form', true, 'createdByIds', createdByIds)) }
    if(apiSlug) {
    queryParams.push(serializeQuery('form', true, 'apiSlug', apiSlug)) }
    if(apiVersion) {
    queryParams.push(serializeQuery('form', true, 'apiVersion', apiVersion)) }
    if(buildType) {
    queryParams.push(serializeQuery('form', true, 'buildType', buildType)) }
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}${urlParams}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as PaginatedOrgJobsResponseWithTotalCount;
    return responseModel;
  }









  async getDocsByOrg(id: number): Promise<GetDocsByOrgResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/orgs/{id}/docs';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as GetDocsByOrgResponse;
    return responseModel;
  }









  async getBuildByOrg(id: number, offset: number, limit: number, optionalParams: { sortBy?: OrgSortBy, direction?: Direction, statuses?: string[], tags?: number[], createdByIds?: number[], apiSlug?: string, apiVersion?: string } = {}): Promise<PaginatedOrgBuildsWithJobsResponseWithTotalCount> {
    const { sortBy, direction, statuses, tags, createdByIds, apiSlug, apiVersion } = optionalParams;
    if( id === undefined||offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: id,offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/orgs/{id}/builds';
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
    if(apiSlug) {
    queryParams.push(serializeQuery('form', true, 'apiSlug', apiSlug)) }
    if(apiVersion) {
    queryParams.push(serializeQuery('form', true, 'apiVersion', apiVersion)) }
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}${urlParams}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as PaginatedOrgBuildsWithJobsResponseWithTotalCount;
    return responseModel;
  }









  async getOrgApiBuilds(id: number): Promise<GetOrgApiBuildsResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/orgs/{id}/api-builds';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as GetOrgApiBuildsResponse;
    return responseModel;
  }









  async getOrgArtifacts(id: number, offset: number, limit: number, optionalParams: { sortBy?: OrgSortBy, direction?: OrgDirection, artifactTypes?: ArtifactTypes, statuses?: OrgStatuses, createdByIds?: number[] } = {}): Promise<PaginatedOrgArtifactsResponse> {
    const { sortBy, direction, artifactTypes, statuses, createdByIds } = optionalParams;
    if( id === undefined||offset === undefined||limit === undefined ){
      throw new Error('The following are required parameters: id,offset,limit, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/orgs/{id}/artifacts';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    if(sortBy) {
    queryParams.push(serializeQuery('form', true, 'sortBy', sortBy)) }
    if(direction) {
    queryParams.push(serializeQuery('form', true, 'direction', direction)) }
    if(artifactTypes) {
    queryParams.push(serializeQuery('form', true, 'artifactTypes', artifactTypes)) }
    if(statuses) {
    queryParams.push(serializeQuery('form', true, 'statuses', statuses)) }
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
    const responseModel = response.data as PaginatedOrgArtifactsResponse;
    return responseModel;
  }









}