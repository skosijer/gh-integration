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
        .get("/users?offset=1&limit=9&orgId=2&email=Devon21@gmail.com&firstName=sequi&lastName=eos&orgIds=pariatur&orgIds=nemo&sortBy=totam&direction=delectus")
        .reply(200, {data: {}});
      return sdk.user.getUsers(1, 9, { orgId: 2, email: 'Devon21@gmail.com', firstName: 'sequi', lastName: 'eos', orgIds: ['pariatur','nemo'], sortBy: 'totam', direction: 'delectus' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users?offset=9&limit=6&orgId=8&email=Titus40@gmail.com&firstName=ducimus&lastName=dolorem&orgIds=reprehenderit&orgIds=ab&sortBy=perspiciatis&direction=suscipit")
        .reply(200, {data: {}});
      return expect(async () => await sdk.user.getUsers()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users?offset=3&limit=5&orgId=6&email=Kiley.Lebsack@gmail.com&firstName=nam&lastName=doloremque&orgIds=delectus&orgIds=possimus&sortBy=nisi&direction=nemo")
        .reply(404, {data: {}});
      return expect(async () => await sdk.user.getUsers(3, 5, { orgId: 6, email: 'Kiley.Lebsack@gmail.com', firstName: 'nam', lastName: 'doloremque', orgIds: ['delectus','possimus'], sortBy: 'nisi', direction: 'nemo' })).rejects.toThrow();
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
        .get("/users/5008938971")
        .reply(200, {data: {}});
      return sdk.user.getUserById(5008938971).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users/6953110369")
        .reply(200, {data: {}});
      return expect(async () => await sdk.user.getUserById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users/2211337502")
        .reply(404, {data: {}});
      return expect(async () => await sdk.user.getUserById(2211337502)).rejects.toThrow();
    });

  });

  describe("test removeUser", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/users/3633681510")
        .reply(200, {data: {}});
      return sdk.user.removeUser(3633681510).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/users/8060340071")
        .reply(200, {data: {}});
      return expect(async () => await sdk.user.removeUser()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/users/5375346343")
        .reply(404, {data: {}});
      return expect(async () => await sdk.user.removeUser(5375346343)).rejects.toThrow();
    });

  });

  describe("test updateUser", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/users/1221641381")
        .reply(200, {data: {}});
      return sdk.user.updateUser({},1221641381).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/users/6251991862")
        .reply(200, {data: {}});
      return expect(async () => await sdk.user.updateUser()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/users/4756032384")
        .reply(404, {data: {}});
      return expect(async () => await sdk.user.updateUser({},4756032384)).rejects.toThrow();
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
        .get("/users/orgs?offset=3&limit=3")
        .reply(200, {data: {}});
      return sdk.user.getUserOrgs(3, 3).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users/orgs?offset=5&limit=8")
        .reply(200, {data: {}});
      return expect(async () => await sdk.user.getUserOrgs()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/users/orgs?offset=8&limit=4")
        .reply(404, {data: {}});
      return expect(async () => await sdk.user.getUserOrgs(8, 4)).rejects.toThrow();
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