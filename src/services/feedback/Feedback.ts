import BaseService from '../../BaseService';

import { CreateUserFeedbackRequest } from './models/CreateUserFeedbackRequest';



export class FeedbackService extends BaseService {



  async sendFeedback(input: CreateUserFeedbackRequest): Promise<any> {

    const headers: { [key: string]: string } = {'Content-Type' : 'application/json'};
    const urlEndpoint = '/feedback';
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