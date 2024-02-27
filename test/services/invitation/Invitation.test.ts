import nock from 'nock';

import { Liblab } from '../../../src';

import { InvitationService } from '../../../src/services/invitation/Invitation';

describe("test InvitationService object", () => {
  it("should be an object", () => {
    expect(typeof InvitationService).toBe('function');
  });
});

describe("test Invitation", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test createOrgInvite", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/invitations/org/3/invite")
        .reply(200, {data: {}});
      return sdk.invitation.createOrgInvite({},3).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/invitations/org/3/invite")
        .reply(200, {data: {}});
      return expect(async () => await sdk.invitation.createOrgInvite()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/invitations/org/7/invite")
        .reply(404, {data: {}});
      return expect(async () => await sdk.invitation.createOrgInvite({},7)).rejects.toThrow();
    });

  });

  describe("test redeemInvite", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/invitations/eligendi/redeem")
        .reply(200, {data: {}});
      return sdk.invitation.redeemInvite('eligendi').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/invitations/sapiente/redeem")
        .reply(200, {data: {}});
      return expect(async () => await sdk.invitation.redeemInvite()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/invitations/velit/redeem")
        .reply(404, {data: {}});
      return expect(async () => await sdk.invitation.redeemInvite('velit')).rejects.toThrow();
    });

  });

  describe("test declineInvite", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/invitations/aspernatur/decline")
        .reply(200, {data: {}});
      return sdk.invitation.declineInvite('aspernatur').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/invitations/eum/decline")
        .reply(200, {data: {}});
      return expect(async () => await sdk.invitation.declineInvite()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/invitations/iste/decline")
        .reply(404, {data: {}});
      return expect(async () => await sdk.invitation.declineInvite('iste')).rejects.toThrow();
    });

  });

  describe("test getReceivedInvites", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/received?offset=6&limit=8")
        .reply(200, {data: {}});
      return sdk.invitation.getReceivedInvites(6, 8).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/received?offset=9&limit=9")
        .reply(200, {data: {}});
      return expect(async () => await sdk.invitation.getReceivedInvites()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/received?offset=5&limit=7")
        .reply(404, {data: {}});
      return expect(async () => await sdk.invitation.getReceivedInvites(5, 7)).rejects.toThrow();
    });

  });

  describe("test getSentInvites", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/sent?offset=7&limit=1")
        .reply(200, {data: {}});
      return sdk.invitation.getSentInvites(7, 1).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/sent?offset=1&limit=4")
        .reply(200, {data: {}});
      return expect(async () => await sdk.invitation.getSentInvites()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/sent?offset=4&limit=5")
        .reply(404, {data: {}});
      return expect(async () => await sdk.invitation.getSentInvites(4, 5)).rejects.toThrow();
    });

  });

  describe("test searchInvites", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/search?offset=2&limit=5&orgName=iste&status=corrupti&sortBy=nam&direction=fugit")
        .reply(200, {data: {}});
      return sdk.invitation.searchInvites(2, 5, { orgName: 'iste', status: 'corrupti', sortBy: 'nam', direction: 'fugit' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/search?offset=1&limit=2&orgName=reiciendis&status=exercitationem&sortBy=similique&direction=quae")
        .reply(200, {data: {}});
      return expect(async () => await sdk.invitation.searchInvites()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/search?offset=9&limit=1&orgName=atque&status=voluptate&sortBy=rerum&direction=iste")
        .reply(404, {data: {}});
      return expect(async () => await sdk.invitation.searchInvites(9, 1, { orgName: 'atque', status: 'voluptate', sortBy: 'rerum', direction: 'iste' })).rejects.toThrow();
    });

  });

  describe("test getInviteByCode", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/provident")
        .reply(200, {data: {}});
      return sdk.invitation.getInviteByCode('provident').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/velit")
        .reply(200, {data: {}});
      return expect(async () => await sdk.invitation.getInviteByCode()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/error")
        .reply(404, {data: {}});
      return expect(async () => await sdk.invitation.getInviteByCode('error')).rejects.toThrow();
    });

  });

});