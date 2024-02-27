import nock from 'nock';

import { Liblab } from '../../../src';

import { HubSpotService } from '../../../src/services/hubSpot/HubSpot';

describe("test HubSpotService object", () => {
  it("should be an object", () => {
    expect(typeof HubSpotService).toBe('function');
  });
});

describe("test HubSpot", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test sendShadowForm", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/hubspot/shadow-form")
        .reply(200, {data: {}});
      return sdk.hubSpot.sendShadowForm({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

});