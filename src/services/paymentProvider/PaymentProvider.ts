import BaseService from '../../BaseService';



import { serializeHeader } from '../../http/QuerySerializer';

export class PaymentProviderService extends BaseService {



  async stripeWebhook(stripeSignature: string): Promise<any> {
    if( stripeSignature === undefined ){
      throw new Error('The following parameter is required: stripeSignature, cannot be empty or blank')
    }
    const headers: { [key: string]: string } = {};
    if(stripeSignature !== undefined){ 
headers['stripe-signature']=serializeHeader(false, stripeSignature) }
    const urlEndpoint = '/payment-provider/stripe/webhook';
    const finalUrl = encodeURI(`${this.baseUrl+urlEndpoint}`);
    const response:any = await this.httpClient.post(
      finalUrl,
      {},
      {
      ...headers,
      ...this.getAuthorizationHeader(),
    }, true);
    const responseModel = response.data;
    return responseModel;
  }








}