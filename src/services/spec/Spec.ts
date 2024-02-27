import BaseService from '../../BaseService';

import { ValidateSpecResponse } from './models/ValidateSpecResponse';
import { ValidateSpecRequest } from './models/ValidateSpecRequest';



export class SpecService extends BaseService {



  async validateSpec(input: ValidateSpecRequest): Promise<ValidateSpecResponse> {

    const headers: { [key: string]: string } = {'Content-Type' : 'multipart/form-data'};
    const urlEndpoint = '/spec/validate';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
const formInput = SpecService.formData(input)
    const response:any = await this.httpClient.post(
      finalUrl,
      formInput,
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as ValidateSpecResponse;
    return responseModel;
  }








}