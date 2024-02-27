import BaseService from '../../BaseService';

import { DocResponse } from '../common/DocResponse';
import { GetAllApprovedByOrgSlugAndApiSlugResponse } from './models/GetAllApprovedByOrgSlugAndApiSlugResponse';
import { PaginatedDocResponse } from '../common/PaginatedDocResponse';
import { DocCreatedResponse } from './models/DocCreatedResponse';
import { CreateDocRequest } from './models/CreateDocRequest';
import { UpdateDocRequest } from './models/UpdateDocRequest';
import { DocDownloadResponse } from './models/DocDownloadResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class DocService extends BaseService {


  async getApprovedByOrgSlugAndApiSlug(orgSlug: string, optionalParams: { apiSlug?: string, apiVersion?: string } = {}): Promise<DocResponse> {
    const { apiSlug, apiVersion } = optionalParams;
    if( orgSlug === undefined ){
      throw new Error('The following parameter is required: orgSlug, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(orgSlug) {
    queryParams.push(serializeQuery('form', true, 'orgSlug', orgSlug)) }
    if(apiSlug) {
    queryParams.push(serializeQuery('form', true, 'apiSlug', apiSlug)) }
    if(apiVersion) {
    queryParams.push(serializeQuery('form', true, 'apiVersion', apiVersion)) }
    const urlEndpoint = '/docs/approved';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}${urlParams}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as DocResponse;
    return responseModel;
  }









  async getAllApprovedByOrgSlugAndApiSlug(orgSlug: string, optionalParams: { apiSlug?: string, apiVersion?: string } = {}): Promise<GetAllApprovedByOrgSlugAndApiSlugResponse> {
    const { apiSlug, apiVersion } = optionalParams;
    if( orgSlug === undefined ){
      throw new Error('The following parameter is required: orgSlug, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(orgSlug) {
    queryParams.push(serializeQuery('form', true, 'orgSlug', orgSlug)) }
    if(apiSlug) {
    queryParams.push(serializeQuery('form', true, 'apiSlug', apiSlug)) }
    if(apiVersion) {
    queryParams.push(serializeQuery('form', true, 'apiVersion', apiVersion)) }
    const urlEndpoint = '/docs/approved/all';
    const urlParams = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}${urlParams}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as GetAllApprovedByOrgSlugAndApiSlugResponse;
    return responseModel;
  }









  async findDocs(offset: number, limit: number, artifactId: number): Promise<PaginatedDocResponse> {
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
    const urlEndpoint = '/docs';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}?${queryParams.join('&')}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as PaginatedDocResponse;
    return responseModel;
  }


  async createDoc(input: CreateDocRequest): Promise<DocCreatedResponse> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/docs';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as DocCreatedResponse;
    return responseModel;
  }









  async approve(previewSlug: string): Promise<DocResponse> {
    if( previewSlug === undefined ){
      throw new Error('The following parameter is required: previewSlug, cannot be empty or blank')
    }
    let urlEndpoint = '/docs/{previewSlug}/approve';
    urlEndpoint = urlEndpoint.replace('{previewSlug}', serializePath('simple', false,  previewSlug, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as DocResponse;
    return responseModel;
  }









  async unapprove(previewSlug: string): Promise<DocResponse> {
    if( previewSlug === undefined ){
      throw new Error('The following parameter is required: previewSlug, cannot be empty or blank')
    }
    let urlEndpoint = '/docs/{previewSlug}/unapprove';
    urlEndpoint = urlEndpoint.replace('{previewSlug}', serializePath('simple', false,  previewSlug, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as DocResponse;
    return responseModel;
  }








  async getDocById(id: number): Promise<DocResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/docs/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as DocResponse;
    return responseModel;
  }



  async updateDoc(input: UpdateDocRequest, id: number): Promise<DocResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    let urlEndpoint = '/docs/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.put(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as DocResponse;
    return responseModel;
  }



  async removeDoc(id: number): Promise<any> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/docs/{id}';
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





  async getDownloadUrl(id: number): Promise<DocDownloadResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/docs/{id}/getDownloadUrl';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as DocDownloadResponse;
    return responseModel;
  }









}