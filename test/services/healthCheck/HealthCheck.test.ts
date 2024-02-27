import nock from 'nock';

import { Liblab } from '../../../src';

import { HealthCheckService } from '../../../src/services/healthCheck/HealthCheck';

describe("test HealthCheckService object", () => {
  it("should be an object", () => {
    expect(typeof HealthCheckService).toBe('function');
  });
});

describe("test HealthCheck", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test healthCheckControllerCheck", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/health-check")
        .reply(200, {data: {}});
      return sdk.healthCheck.healthCheckControllerCheck().then((r: any) => expect(r.data).toEqual({}))
    });





  });

});