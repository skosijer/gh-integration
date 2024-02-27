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
        .get("/sdks?offset=4&limit=8&artifactId=5&sortBy=maiores&direction=iusto")
        .reply(200, {data: {}});
      return sdk.sdk.findSdks(4, 8, 5, { sortBy: 'maiores', direction: 'iusto' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/sdks?offset=9&limit=9&artifactId=4&sortBy=fugiat&direction=commodi")
        .reply(200, {data: {}});
      return expect(async () => await sdk.sdk.findSdks()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/sdks?offset=3&limit=1&artifactId=5&sortBy=atque&direction=exercitationem")
        .reply(404, {data: {}});
      return expect(async () => await sdk.sdk.findSdks(3, 1, 5, { sortBy: 'atque', direction: 'exercitationem' })).rejects.toThrow();
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
        .get("/sdks/7158729761")
        .reply(200, {data: {}});
      return sdk.sdk.getSdkById(7158729761).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/sdks/8667366269")
        .reply(200, {data: {}});
      return expect(async () => await sdk.sdk.getSdkById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/sdks/3740119686")
        .reply(404, {data: {}});
      return expect(async () => await sdk.sdk.getSdkById(3740119686)).rejects.toThrow();
    });

  });

  describe("test removeSdk", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/sdks/9113553736")
        .reply(200, {data: {}});
      return sdk.sdk.removeSdk(9113553736).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/sdks/9923696447")
        .reply(200, {data: {}});
      return expect(async () => await sdk.sdk.removeSdk()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/sdks/3514886614")
        .reply(404, {data: {}});
      return expect(async () => await sdk.sdk.removeSdk(3514886614)).rejects.toThrow();
    });

  });

});