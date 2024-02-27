import BaseService from '../../BaseService';

import { SubscriptionResponse } from './models/SubscriptionResponse';
import { BillingInterval } from './models/BillingInterval';
import { CheckoutLinkResponse } from './models/CheckoutLinkResponse';

import { serializeQuery, serializePath } from '../../http/QuerySerializer';

export class SubscriptionService extends BaseService {


  async getActiveSubscription(orgId: number): Promise<SubscriptionResponse> {
    if( orgId === undefined ){
      throw new Error('The following parameter is required: orgId, cannot be empty or blank')
    }
    let urlEndpoint = '/orgs/{orgId}/subscriptions/active';
    urlEndpoint = urlEndpoint.replace('{orgId}', serializePath('simple', false,  orgId, undefined));
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as SubscriptionResponse;
    return responseModel;
  }









  async getCheckoutLink(orgId: number, planId: number, billingInterval: BillingInterval): Promise<CheckoutLinkResponse> {
    if( orgId === undefined||planId === undefined||billingInterval === undefined ){
      throw new Error('The following are required parameters: orgId,planId,billingInterval, cannot be empty or blank')
    }
    const queryParams: string[] = [];
    let urlEndpoint = '/orgs/{orgId}/subscriptions/checkout/link';
    urlEndpoint = urlEndpoint.replace('{orgId}', serializePath('simple', false,  orgId, undefined));
    if(planId) {
    queryParams.push(serializeQuery('form', true, 'planId', planId)) }
    if(billingInterval) {
    queryParams.push(serializeQuery('form', true, 'billingInterval', billingInterval)) }
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}?${queryParams.join('&')}`);
    const response:any = await this.httpClient.get(
      finalUrl,
      {},
      {
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data as CheckoutLinkResponse;
    return responseModel;
  }









}