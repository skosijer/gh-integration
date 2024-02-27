import nock from 'nock';

import { Liblab } from '../../../src';

import { UserService } from '../../../src/services/user/User';

describe("test UserService object", () => {
  it("should be an object", () => {
    expect(typeof UserService).toBe('function');
  });
});

describe("test User", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test getCurrentUser", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users/current-user")
        .reply(200, {data: {}});
      return sdk.user.getCurrentUser().then((r: any) => expect(r.data).toEqual({}))
    });





  });

  describe("test getUsers", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users?offset=1&limit=9&orgId=5&email=Friedrich_Renner@gmail.com&firstName=repellendus&lastName=quia&orgIds=recusandae&orgIds=nostrum&sortBy=veniam&direction=nostrum")
        .reply(200, {data: {}});
      return sdk.user.getUsers(1, 9, { orgId: 5, email: 'Friedrich_Renner@gmail.com', firstName: 'repellendus', lastName: 'quia', orgIds: ['recusandae','nostrum'], sortBy: 'veniam', direction: 'nostrum' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users?offset=1&limit=3&orgId=9&email=Kathlyn.Gorczany84@gmail.com&firstName=debitis&lastName=rerum&orgIds=iusto&orgIds=esse&sortBy=laboriosam&direction=ullam")
        .reply(200, {data: {}});
      return expect(async () => await sdk.user.getUsers()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users?offset=5&limit=5&orgId=8&email=Gus19@gmail.com&firstName=libero&lastName=exercitationem&orgIds=veritatis&orgIds=fuga&sortBy=voluptatem&direction=totam")
        .reply(404, {data: {}});
      return expect(async () => await sdk.user.getUsers(5, 5, { orgId: 8, email: 'Gus19@gmail.com', firstName: 'libero', lastName: 'exercitationem', orgIds: ['veritatis','fuga'], sortBy: 'voluptatem', direction: 'totam' })).rejects.toThrow();
    });

  });

  describe("test createUser", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/users")
        .reply(200, {data: {}});
      return sdk.user.createUser({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

  describe("test getUserById", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users/2295901468")
        .reply(200, {data: {}});
      return sdk.user.getUserById(2295901468).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users/6342138974")
        .reply(200, {data: {}});
      return expect(async () => await sdk.user.getUserById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users/6569475972")
        .reply(404, {data: {}});
      return expect(async () => await sdk.user.getUserById(6569475972)).rejects.toThrow();
    });

  });

  describe("test removeUser", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/users/8338355008")
        .reply(200, {data: {}});
      return sdk.user.removeUser(8338355008).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/users/8067349037")
        .reply(200, {data: {}});
      return expect(async () => await sdk.user.removeUser()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/users/8168543546")
        .reply(404, {data: {}});
      return expect(async () => await sdk.user.removeUser(8168543546)).rejects.toThrow();
    });

  });

  describe("test updateUser", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/users/6980892960")
        .reply(200, {data: {}});
      return sdk.user.updateUser({},6980892960).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/users/8132710014")
        .reply(200, {data: {}});
      return expect(async () => await sdk.user.updateUser()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/users/9355786987")
        .reply(404, {data: {}});
      return expect(async () => await sdk.user.updateUser({},9355786987)).rejects.toThrow();
    });

  });

  describe("test updateEmailSubscription", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/users/emails/subscriptions")
        .reply(200, {data: {}});
      return sdk.user.updateEmailSubscription({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

  describe("test getUserOrgs", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users/orgs?offset=8&limit=4")
        .reply(200, {data: {}});
      return sdk.user.getUserOrgs(8, 4).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users/orgs?offset=6&limit=6")
        .reply(200, {data: {}});
      return expect(async () => await sdk.user.getUserOrgs()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users/orgs?offset=7&limit=3")
        .reply(404, {data: {}});
      return expect(async () => await sdk.user.getUserOrgs(7, 3)).rejects.toThrow();
    });

  });

  describe("test getUserApis", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users/apis")
        .reply(200, {data: {}});
      return sdk.user.getUserApis().then((r: any) => expect(r.data).toEqual({}))
    });





  });

});