import BaseService from '../../BaseService';

import { HubSpotFromDto } from './models/HubSpotFromDto';



export class HubSpotService extends BaseService {



  async sendShadowForm(input: HubSpotFromDto): Promise<any> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/hubspot/shadow-form';
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