import nock from 'nock';

import { Liblab } from '../../../src';

import { TokenService } from '../../../src/services/token/Token';

describe("test TokenService object", () => {
  it("should be an object", () => {
    expect(typeof TokenService).toBe('function');
  });
});

describe("test Token", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test findTokensByUserId", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/auth/tokens?userId=1")
        .reply(200, {data: {}});
      return sdk.token.findTokensByUserId(1).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/auth/tokens?userId=5")
        .reply(200, {data: {}});
      return expect(async () => await sdk.token.findTokensByUserId()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/auth/tokens?userId=1")
        .reply(404, {data: {}});
      return expect(async () => await sdk.token.findTokensByUserId(1)).rejects.toThrow();
    });

  });

  describe("test createToken", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/auth/tokens")
        .reply(200, {data: {}});
      return sdk.token.createToken({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

  describe("test getTokenById", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/auth/tokens/8578658508")
        .reply(200, {data: {}});
      return sdk.token.getTokenById(8578658508).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/auth/tokens/9522698199")
        .reply(200, {data: {}});
      return expect(async () => await sdk.token.getTokenById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/auth/tokens/8612451576")
        .reply(404, {data: {}});
      return expect(async () => await sdk.token.getTokenById(8612451576)).rejects.toThrow();
    });

  });

  describe("test removeToken", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/auth/tokens/9916829683")
        .reply(200, {data: {}});
      return sdk.token.removeToken(9916829683).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/auth/tokens/7441017590")
        .reply(200, {data: {}});
      return expect(async () => await sdk.token.removeToken()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/auth/tokens/6427490237")
        .reply(404, {data: {}});
      return expect(async () => await sdk.token.removeToken(6427490237)).rejects.toThrow();
    });

  });

});