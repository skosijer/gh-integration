import BaseService from '../../BaseService';

import { GetEnabledPlansResponse } from './models/GetEnabledPlansResponse';



export class PlanService extends BaseService {


  async getEnabledPlans(): Promise<GetEnabledPlansResponse> {

    const urlEndpoint = '/plans/enabled';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as GetEnabledPlansResponse;
    return responseModel;
  }









}