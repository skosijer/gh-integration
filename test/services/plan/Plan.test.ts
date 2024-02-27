import nock from 'nock';

import { Liblab } from '../../../src';

import { PlanService } from '../../../src/services/plan/Plan';

describe("test PlanService object", () => {
  it("should be an object", () => {
    expect(typeof PlanService).toBe('function');
  });
});

describe("test Plan", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test getEnabledPlans", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/plans/enabled")
        .reply(200, {data: {}});
      return sdk.plan.getEnabledPlans().then((r: any) => expect(r.data).toEqual({}))
    });





  });

});