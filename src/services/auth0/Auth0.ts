import BaseService from '../../BaseService';

import { Auth0ResetPasswordResponse } from './models/Auth0ResetPasswordResponse';



export class Auth0Service extends BaseService {



  async resetPasswordAuth0(): Promise<Auth0ResetPasswordResponse> {

    const urlEndpoint = '/auth0/reset-password';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as Auth0ResetPasswordResponse;
    return responseModel;
  }








}