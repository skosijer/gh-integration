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
        .post("/invitations/org/2/invite")
        .reply(200, {data: {}});
      return sdk.invitation.createOrgInvite({},2).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/invitations/org/9/invite")
        .reply(200, {data: {}});
      return expect(async () => await sdk.invitation.createOrgInvite()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/invitations/org/2/invite")
        .reply(404, {data: {}});
      return expect(async () => await sdk.invitation.createOrgInvite({},2)).rejects.toThrow();
    });

  });

  describe("test redeemInvite", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/invitations/magni/redeem")
        .reply(200, {data: {}});
      return sdk.invitation.redeemInvite('magni').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/invitations/quasi/redeem")
        .reply(200, {data: {}});
      return expect(async () => await sdk.invitation.redeemInvite()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/invitations/saepe/redeem")
        .reply(404, {data: {}});
      return expect(async () => await sdk.invitation.redeemInvite('saepe')).rejects.toThrow();
    });

  });

  describe("test declineInvite", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/invitations/earum/decline")
        .reply(200, {data: {}});
      return sdk.invitation.declineInvite('earum').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/invitations/soluta/decline")
        .reply(200, {data: {}});
      return expect(async () => await sdk.invitation.declineInvite()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/invitations/corporis/decline")
        .reply(404, {data: {}});
      return expect(async () => await sdk.invitation.declineInvite('corporis')).rejects.toThrow();
    });

  });

  describe("test getReceivedInvites", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/received?offset=2&limit=5")
        .reply(200, {data: {}});
      return sdk.invitation.getReceivedInvites(2, 5).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/received?offset=9&limit=3")
        .reply(200, {data: {}});
      return expect(async () => await sdk.invitation.getReceivedInvites()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/received?offset=4&limit=7")
        .reply(404, {data: {}});
      return expect(async () => await sdk.invitation.getReceivedInvites(4, 7)).rejects.toThrow();
    });

  });

  describe("test getSentInvites", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/sent?offset=9&limit=3")
        .reply(200, {data: {}});
      return sdk.invitation.getSentInvites(9, 3).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/sent?offset=7&limit=7")
        .reply(200, {data: {}});
      return expect(async () => await sdk.invitation.getSentInvites()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/sent?offset=3&limit=5")
        .reply(404, {data: {}});
      return expect(async () => await sdk.invitation.getSentInvites(3, 5)).rejects.toThrow();
    });

  });

  describe("test searchInvites", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/search?offset=8&limit=6&orgName=voluptatum&status=est&sortBy=deserunt&direction=nesciunt")
        .reply(200, {data: {}});
      return sdk.invitation.searchInvites(8, 6, { orgName: 'voluptatum', status: 'est', sortBy: 'deserunt', direction: 'nesciunt' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/search?offset=1&limit=1&orgName=iusto&status=doloremque&sortBy=expedita&direction=voluptatibus")
        .reply(200, {data: {}});
      return expect(async () => await sdk.invitation.searchInvites()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/search?offset=5&limit=3&orgName=similique&status=fugiat&sortBy=ad&direction=quos")
        .reply(404, {data: {}});
      return expect(async () => await sdk.invitation.searchInvites(5, 3, { orgName: 'similique', status: 'fugiat', sortBy: 'ad', direction: 'quos' })).rejects.toThrow();
    });

  });

  describe("test getInviteByCode", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/recusandae")
        .reply(200, {data: {}});
      return sdk.invitation.getInviteByCode('recusandae').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/laudantium")
        .reply(200, {data: {}});
      return expect(async () => await sdk.invitation.getInviteByCode()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/invitations/voluptatibus")
        .reply(404, {data: {}});
      return expect(async () => await sdk.invitation.getInviteByCode('voluptatibus')).rejects.toThrow();
    });

  });

});