import BaseService from '../../BaseService';

import { GetArtifactsResponse } from './models/GetArtifactsResponse';
import { ArtifactResponse } from '../common/ArtifactResponse';
import { CreateArtifactRequest } from './models/CreateArtifactRequest';
import { GetArtifactStatusesResponse } from './models/GetArtifactStatusesResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class ArtifactService extends BaseService {


  async getArtifacts(buildId: number): Promise<GetArtifactsResponse> {
    if( buildId === undefined ){
      throw new Error('The following parameter is required: buildId, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(buildId) {
    queryParams.push(serializeQuery('form', true, 'buildId', buildId)) }
    const urlEndpoint = '/artifacts';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}?${queryParams.join('&')}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as GetArtifactsResponse;
    return responseModel;
  }


  async createArtifact(input: CreateArtifactRequest): Promise<ArtifactResponse> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/artifacts';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as ArtifactResponse;
    return responseModel;
  }








  async getArtifactStatuses(): Promise<GetArtifactStatusesResponse> {

    const urlEndpoint = '/artifacts/statuses';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as GetArtifactStatusesResponse;
    return responseModel;
  }









  async getArtifactById(id: number): Promise<ArtifactResponse> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/artifacts/{id}';
    urlEndpoint = urlEndpoint.replace('{id}', serializePath('simple', false,  id, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as ArtifactResponse;
    return responseModel;
  }





  async removeArtifact(id: number): Promise<any> {
    if( id === undefined ){
      throw new Error('The following parameter is required: id, cannot be empty or blank')
    }
    let urlEndpoint = '/artifacts/{id}';
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