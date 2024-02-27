import BaseService from '../../BaseService';

import { HealthCheckResponse } from './models/HealthCheckResponse';



export class HealthCheckService extends BaseService {


  async healthCheckControllerCheck(): Promise<HealthCheckResponse> {

    const urlEndpoint = '/health-check';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as HealthCheckResponse;
    return responseModel;
  }









}