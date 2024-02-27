import BaseService from '../../BaseService';

import { AskAboutSpecResponse } from './models/AskAboutSpecResponse';
import { AskAboutSpecRequest } from './models/AskAboutSpecRequest';



export class AiService extends BaseService {



  async askAboutSpec(input: AskAboutSpecRequest): Promise<AskAboutSpecResponse> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/ai/ask-about-spec';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      input,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as AskAboutSpecResponse;
    return responseModel;
  }








}