import BaseService from '../../BaseService';

import { TrackEventRequest } from './models/TrackEventRequest';



export class EventService extends BaseService {



  async track(input: TrackEventRequest): Promise<any> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/events';
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