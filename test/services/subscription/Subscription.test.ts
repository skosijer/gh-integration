import nock from 'nock';

import { Liblab } from '../../../src';

import { SubscriptionService } from '../../../src/services/subscription/Subscription';

describe("test SubscriptionService object", () => {
  it("should be an object", () => {
    expect(typeof SubscriptionService).toBe('function');
  });
});

describe("test Subscription", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test getActiveSubscription", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/3/subscriptions/active")
        .reply(200, {data: {}});
      return sdk.subscription.getActiveSubscription(3).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/6/subscriptions/active")
        .reply(200, {data: {}});
      return expect(async () => await sdk.subscription.getActiveSubscription()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/6/subscriptions/active")
        .reply(404, {data: {}});
      return expect(async () => await sdk.subscription.getActiveSubscription(6)).rejects.toThrow();
    });

  });

  describe("test getCheckoutLink", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/9/subscriptions/checkout/link?planId=1&billingInterval=blanditiis")
        .reply(200, {data: {}});
      return sdk.subscription.getCheckoutLink(9, 1, 'blanditiis').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/4/subscriptions/checkout/link?planId=3&billingInterval=voluptate")
        .reply(200, {data: {}});
      return expect(async () => await sdk.subscription.getCheckoutLink()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/3/subscriptions/checkout/link?planId=8&billingInterval=reprehenderit")
        .reply(404, {data: {}});
      return expect(async () => await sdk.subscription.getCheckoutLink(3, 8, 'reprehenderit')).rejects.toThrow();
    });

  });

});