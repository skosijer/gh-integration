import BaseService from '../../BaseService';

import { SearchResponse } from './models/SearchResponse';
import { TagResponse } from '../common/TagResponse';
import { CreateTagRequest } from './models/CreateTagRequest';

import { serializeQuery } from '../../http/QuerySerializer';

export class TagsService extends BaseService {


  async search(offset: number, limit: number, searchQuery: string): Promise<SearchResponse> {
    if( offset === undefined||limit === undefined||searchQuery === undefined ){
      throw new Error('The following are required parameters: offset,limit,searchQuery, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    if(offset) {
    queryParams.push(serializeQuery('form', true, 'offset', offset)) }
    if(limit) {
    queryParams.push(serializeQuery('form', true, 'limit', limit)) }
    if(searchQuery) {
    queryParams.push(serializeQuery('form', true, 'searchQuery', searchQuery)) }
    const urlEndpoint = '/tags';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}?${queryParams.join('&')}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as SearchResponse;
    return responseModel;
  }


  async create(input: CreateTagRequest): Promise<TagResponse> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/tags';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as TagResponse;
    return responseModel;
  }








}