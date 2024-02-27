import nock from 'nock';

import { Liblab } from '../../../src';

import { PaymentProviderService } from '../../../src/services/paymentProvider/PaymentProvider';

describe("test PaymentProviderService object", () => {
  it("should be an object", () => {
    expect(typeof PaymentProviderService).toBe('function');
  });
});

describe("test PaymentProvider", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test stripeWebhook", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/payment-provider/stripe/webhook")
        .reply(200, {data: {}});
      return sdk.paymentProvider.stripeWebhook('architecto').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/payment-provider/stripe/webhook")
        .reply(200, {data: {}});
      return expect(async () => await sdk.paymentProvider.stripeWebhook()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/payment-provider/stripe/webhook")
        .reply(404, {data: {}});
      return expect(async () => await sdk.paymentProvider.stripeWebhook('saepe')).rejects.toThrow();
    });

  });

});