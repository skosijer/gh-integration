import nock from 'nock';

import { Liblab } from '../../../src';

import { OrgMemberService } from '../../../src/services/orgMember/OrgMember';

describe("test OrgMemberService object", () => {
  it("should be an object", () => {
    expect(typeof OrgMemberService).toBe('function');
  });
});

describe("test OrgMember", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test getByOrgId", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/9/members?offset=4&limit=9&email=Linnie.Predovic@gmail.com&firstName=odit&lastName=nostrum&sortBy=ex&direction=eum")
        .reply(200, {data: {}});
      return sdk.orgMember.getByOrgId(9, 4, 9, { email: 'Linnie.Predovic@gmail.com', firstName: 'odit', lastName: 'nostrum', sortBy: 'ex', direction: 'eum' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/1/members?offset=3&limit=7&email=Marietta91@gmail.com&firstName=voluptatum&lastName=quod&sortBy=excepturi&direction=nulla")
        .reply(200, {data: {}});
      return expect(async () => await sdk.orgMember.getByOrgId()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/9/members?offset=9&limit=5&email=Vernon_Jaskolski@gmail.com&firstName=vitae&lastName=illo&sortBy=itaque&direction=ducimus")
        .reply(404, {data: {}});
      return expect(async () => await sdk.orgMember.getByOrgId(9, 9, 5, { email: 'Vernon_Jaskolski@gmail.com', firstName: 'vitae', lastName: 'illo', sortBy: 'itaque', direction: 'ducimus' })).rejects.toThrow();
    });

  });

  describe("test createMember", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/orgs/9/members")
        .reply(200, {data: {}});
      return sdk.orgMember.createMember({},9).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/orgs/3/members")
        .reply(200, {data: {}});
      return expect(async () => await sdk.orgMember.createMember()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/orgs/9/members")
        .reply(404, {data: {}});
      return expect(async () => await sdk.orgMember.createMember({},9)).rejects.toThrow();
    });

  });

  describe("test removeMember", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/1/members/6")
        .reply(200, {data: {}});
      return sdk.orgMember.removeMember(6, 1).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/3/members/9")
        .reply(200, {data: {}});
      return expect(async () => await sdk.orgMember.removeMember()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/8/members/7")
        .reply(404, {data: {}});
      return expect(async () => await sdk.orgMember.removeMember(7, 8)).rejects.toThrow();
    });

  });

  describe("test updateMember", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/1/members/6")
        .reply(200, {data: {}});
      return sdk.orgMember.updateMember({},6, 1).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/2/members/7")
        .reply(200, {data: {}});
      return expect(async () => await sdk.orgMember.updateMember()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/6/members/1")
        .reply(404, {data: {}});
      return expect(async () => await sdk.orgMember.updateMember({},1, 6)).rejects.toThrow();
    });

  });

  describe("test leaveOrg", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/6/leave")
        .reply(200, {data: {}});
      return sdk.orgMember.leaveOrg(6).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/3/leave")
        .reply(200, {data: {}});
      return expect(async () => await sdk.orgMember.leaveOrg()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/1/leave")
        .reply(404, {data: {}});
      return expect(async () => await sdk.orgMember.leaveOrg(1)).rejects.toThrow();
    });

  });

  describe("test enableAllMembers", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/9/enable")
        .reply(200, {data: {}});
      return sdk.orgMember.enableAllMembers(9).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/5/enable")
        .reply(200, {data: {}});
      return expect(async () => await sdk.orgMember.enableAllMembers()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/7/enable")
        .reply(404, {data: {}});
      return expect(async () => await sdk.orgMember.enableAllMembers(7)).rejects.toThrow();
    });

  });

  describe("test disableAllMembers", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/1/disable")
        .reply(200, {data: {}});
      return sdk.orgMember.disableAllMembers(1).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/2/disable")
        .reply(200, {data: {}});
      return expect(async () => await sdk.orgMember.disableAllMembers()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/2/disable")
        .reply(404, {data: {}});
      return expect(async () => await sdk.orgMember.disableAllMembers(2)).rejects.toThrow();
    });

  });

});