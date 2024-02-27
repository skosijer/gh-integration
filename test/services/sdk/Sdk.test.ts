import nock from 'nock';

import { Liblab } from '../../../src';

import { SdkService } from '../../../src/services/sdk/Sdk';

describe("test SdkService object", () => {
  it("should be an object", () => {
    expect(typeof SdkService).toBe('function');
  });
});

describe("test Sdk", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test findSdks", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/sdks?offset=8&limit=2&artifactId=5&sortBy=esse&direction=numquam")
        .reply(200, {data: {}});
      return sdk.sdk.findSdks(8, 2, 5, { sortBy: 'esse', direction: 'numquam' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/sdks?offset=2&limit=8&artifactId=4&sortBy=suscipit&direction=earum")
        .reply(200, {data: {}});
      return expect(async () => await sdk.sdk.findSdks()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/sdks?offset=4&limit=7&artifactId=8&sortBy=rem&direction=ab")
        .reply(404, {data: {}});
      return expect(async () => await sdk.sdk.findSdks(4, 7, 8, { sortBy: 'rem', direction: 'ab' })).rejects.toThrow();
    });

  });

  describe("test createSdk", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/sdks")
        .reply(200, {data: {}});
      return sdk.sdk.createSdk({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

  describe("test getSdkById", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/sdks/8831669829")
        .reply(200, {data: {}});
      return sdk.sdk.getSdkById(8831669829).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/sdks/7545936168")
        .reply(200, {data: {}});
      return expect(async () => await sdk.sdk.getSdkById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/sdks/2616044293")
        .reply(404, {data: {}});
      return expect(async () => await sdk.sdk.getSdkById(2616044293)).rejects.toThrow();
    });

  });

  describe("test removeSdk", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/sdks/5655933106")
        .reply(200, {data: {}});
      return sdk.sdk.removeSdk(5655933106).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/sdks/3610512760")
        .reply(200, {data: {}});
      return expect(async () => await sdk.sdk.removeSdk()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/sdks/8820005516")
        .reply(404, {data: {}});
      return expect(async () => await sdk.sdk.removeSdk(8820005516)).rejects.toThrow();
    });

  });

});