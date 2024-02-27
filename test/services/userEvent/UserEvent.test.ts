import nock from 'nock';

import { Liblab } from '../../../src';

import { UserEventService } from '../../../src/services/userEvent/UserEvent';

describe("test UserEventService object", () => {
  it("should be an object", () => {
    expect(typeof UserEventService).toBe('function');
  });
});

describe("test UserEvent", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test getUserEvents", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/user-events?offset=7&limit=1&email=Jewell_Bernier@gmail.com&orgId=5&sortBy=temporibus&direction=necessitatibus&orgIds=voluptatum&orgIds=consequuntur&eventIds=praesentium&eventIds=doloribus")
        .reply(200, {data: {}});
      return sdk.userEvent.getUserEvents(7, 1, { email: 'Jewell_Bernier@gmail.com', orgId: 5, sortBy: 'temporibus', direction: 'necessitatibus', orgIds: ['voluptatum','consequuntur'], eventIds: ['praesentium','doloribus'] }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/user-events?offset=8&limit=9&email=Dianna.Huel@gmail.com&orgId=6&sortBy=libero&direction=nam&orgIds=consequuntur&orgIds=repellat&eventIds=reprehenderit&eventIds=veniam")
        .reply(200, {data: {}});
      return expect(async () => await sdk.userEvent.getUserEvents()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/user-events?offset=2&limit=1&email=Cleveland56@gmail.com&orgId=2&sortBy=nemo&direction=dignissimos&orgIds=magnam&orgIds=soluta&eventIds=molestiae&eventIds=ad")
        .reply(404, {data: {}});
      return expect(async () => await sdk.userEvent.getUserEvents(2, 1, { email: 'Cleveland56@gmail.com', orgId: 2, sortBy: 'nemo', direction: 'dignissimos', orgIds: ['magnam','soluta'], eventIds: ['molestiae','ad'] })).rejects.toThrow();
    });

  });

  describe("test exportUserEventsToCsv", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/user-events/export-to-csv?email=Isaiah.Marquardt1@gmail.com&orgId=6&filename=Bill&orgIds=aspernatur&orgIds=ad&eventIds=voluptatem&eventIds=numquam")
        .reply(200, {data: {}});
      return sdk.userEvent.exportUserEventsToCsv({ email: 'Isaiah.Marquardt1@gmail.com', orgId: 6, filename: 'Bill', orgIds: ['aspernatur','ad'], eventIds: ['voluptatem','numquam'] }).then((r: any) => expect(r.data).toEqual({}))
    });





  });

  describe("test trackUserPublishPrEvent", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/user-events/track-user-publish-pr-event")
        .reply(200, {data: {}});
      return sdk.userEvent.trackUserPublishPrEvent({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

});