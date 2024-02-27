import nock from 'nock';

import { Liblab } from '../../../src';

import { Auth0Service } from '../../../src/services/auth0/Auth0';

describe("test Auth0Service object", () => {
  it("should be an object", () => {
    expect(typeof Auth0Service).toBe('function');
  });
});

describe("test Auth0", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test resetPasswordAuth0", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/auth0/reset-password")
        .reply(200, {data: {}});
      return sdk.auth0.resetPasswordAuth0().then((r: any) => expect(r.data).toEqual({}))
    });





  });

});