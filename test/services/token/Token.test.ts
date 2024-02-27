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
        .get("/auth/tokens?userId=5")
        .reply(200, {data: {}});
      return sdk.token.findTokensByUserId(5).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/auth/tokens?userId=3")
        .reply(200, {data: {}});
      return expect(async () => await sdk.token.findTokensByUserId()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/auth/tokens?userId=8")
        .reply(404, {data: {}});
      return expect(async () => await sdk.token.findTokensByUserId(8)).rejects.toThrow();
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
        .get("/auth/tokens/4363703404")
        .reply(200, {data: {}});
      return sdk.token.getTokenById(4363703404).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/auth/tokens/8853173390")
        .reply(200, {data: {}});
      return expect(async () => await sdk.token.getTokenById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/auth/tokens/3594292854")
        .reply(404, {data: {}});
      return expect(async () => await sdk.token.getTokenById(3594292854)).rejects.toThrow();
    });

  });

  describe("test removeToken", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/auth/tokens/6332622183")
        .reply(200, {data: {}});
      return sdk.token.removeToken(6332622183).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/auth/tokens/1956451780")
        .reply(200, {data: {}});
      return expect(async () => await sdk.token.removeToken()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/auth/tokens/6225069004")
        .reply(404, {data: {}});
      return expect(async () => await sdk.token.removeToken(6225069004)).rejects.toThrow();
    });

  });

});