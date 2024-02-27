import nock from 'nock';

import { Liblab } from '../../../src';

import { EventService } from '../../../src/services/event/Event';

describe("test EventService object", () => {
  it("should be an object", () => {
    expect(typeof EventService).toBe('function');
  });
});

describe("test Event", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test track", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/events")
        .reply(200, {data: {}});
      return sdk.event.track({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

});