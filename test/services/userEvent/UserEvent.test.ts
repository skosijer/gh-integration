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
        .get("/user-events?offset=7&limit=7&email=Virgil27@gmail.com&orgId=5&sortBy=voluptates&direction=explicabo&orgIds=reiciendis&orgIds=blanditiis&eventIds=perspiciatis&eventIds=possimus")
        .reply(200, {data: {}});
      return sdk.userEvent.getUserEvents(7, 7, { email: 'Virgil27@gmail.com', orgId: 5, sortBy: 'voluptates', direction: 'explicabo', orgIds: ['reiciendis','blanditiis'], eventIds: ['perspiciatis','possimus'] }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/user-events?offset=8&limit=5&email=Shania_Roberts@gmail.com&orgId=9&sortBy=soluta&direction=labore&orgIds=dolor&orgIds=sit&eventIds=libero&eventIds=temporibus")
        .reply(200, {data: {}});
      return expect(async () => await sdk.userEvent.getUserEvents()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/user-events?offset=4&limit=1&email=Eloisa.Adams73@gmail.com&orgId=6&sortBy=vel&direction=sed&orgIds=vitae&orgIds=porro&eventIds=necessitatibus&eventIds=quo")
        .reply(404, {data: {}});
      return expect(async () => await sdk.userEvent.getUserEvents(4, 1, { email: 'Eloisa.Adams73@gmail.com', orgId: 6, sortBy: 'vel', direction: 'sed', orgIds: ['vitae','porro'], eventIds: ['necessitatibus','quo'] })).rejects.toThrow();
    });

  });

  describe("test exportUserEventsToCsv", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/user-events/export-to-csv?email=Camille.Cummings@gmail.com&orgId=2&filename=Fermin&orgIds=vitae&orgIds=doloribus&eventIds=explicabo&eventIds=beatae")
        .reply(200, {data: {}});
      return sdk.userEvent.exportUserEventsToCsv({ email: 'Camille.Cummings@gmail.com', orgId: 2, filename: 'Fermin', orgIds: ['vitae','doloribus'], eventIds: ['explicabo','beatae'] }).then((r: any) => expect(r.data).toEqual({}))
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