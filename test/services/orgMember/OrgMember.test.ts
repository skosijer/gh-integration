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
        .get("/orgs/2/members?offset=4&limit=8&email=Cassandre.Yost62@gmail.com&firstName=earum&lastName=ipsum&sortBy=facilis&direction=nemo")
        .reply(200, {data: {}});
      return sdk.orgMember.getByOrgId(2, 4, 8, { email: 'Cassandre.Yost62@gmail.com', firstName: 'earum', lastName: 'ipsum', sortBy: 'facilis', direction: 'nemo' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/9/members?offset=8&limit=8&email=Justyn.Adams43@gmail.com&firstName=illo&lastName=veritatis&sortBy=maiores&direction=quibusdam")
        .reply(200, {data: {}});
      return expect(async () => await sdk.orgMember.getByOrgId()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/2/members?offset=2&limit=8&email=Lance_King76@gmail.com&firstName=porro&lastName=nihil&sortBy=cupiditate&direction=dicta")
        .reply(404, {data: {}});
      return expect(async () => await sdk.orgMember.getByOrgId(2, 2, 8, { email: 'Lance_King76@gmail.com', firstName: 'porro', lastName: 'nihil', sortBy: 'cupiditate', direction: 'dicta' })).rejects.toThrow();
    });

  });

  describe("test createMember", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/orgs/3/members")
        .reply(200, {data: {}});
      return sdk.orgMember.createMember({},3).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/orgs/2/members")
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
        .delete("/orgs/9/members/7")
        .reply(200, {data: {}});
      return sdk.orgMember.removeMember(7, 9).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/9/members/2")
        .reply(200, {data: {}});
      return expect(async () => await sdk.orgMember.removeMember()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/7/members/4")
        .reply(404, {data: {}});
      return expect(async () => await sdk.orgMember.removeMember(4, 7)).rejects.toThrow();
    });

  });

  describe("test updateMember", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/2/members/9")
        .reply(200, {data: {}});
      return sdk.orgMember.updateMember({},9, 2).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/6/members/2")
        .reply(200, {data: {}});
      return expect(async () => await sdk.orgMember.updateMember()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/6/members/3")
        .reply(404, {data: {}});
      return expect(async () => await sdk.orgMember.updateMember({},3, 6)).rejects.toThrow();
    });

  });

  describe("test leaveOrg", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/2/leave")
        .reply(200, {data: {}});
      return sdk.orgMember.leaveOrg(2).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/2/leave")
        .reply(200, {data: {}});
      return expect(async () => await sdk.orgMember.leaveOrg()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/2/leave")
        .reply(404, {data: {}});
      return expect(async () => await sdk.orgMember.leaveOrg(2)).rejects.toThrow();
    });

  });

  describe("test enableAllMembers", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/1/enable")
        .reply(200, {data: {}});
      return sdk.orgMember.enableAllMembers(1).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/8/enable")
        .reply(200, {data: {}});
      return expect(async () => await sdk.orgMember.enableAllMembers()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/4/enable")
        .reply(404, {data: {}});
      return expect(async () => await sdk.orgMember.enableAllMembers(4)).rejects.toThrow();
    });

  });

  describe("test disableAllMembers", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/4/disable")
        .reply(200, {data: {}});
      return sdk.orgMember.disableAllMembers(4).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/8/disable")
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