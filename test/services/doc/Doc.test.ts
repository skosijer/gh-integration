import nock from 'nock';

import { Liblab } from '../../../src';

import { DocService } from '../../../src/services/doc/Doc';

describe("test DocService object", () => {
  it("should be an object", () => {
    expect(typeof DocService).toBe('function');
  });
});

describe("test Doc", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test getApprovedByOrgSlugAndApiSlug", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/approved?orgSlug=dolore&apiSlug=aliquam&apiVersion=iure")
        .reply(200, {data: {}});
      return sdk.doc.getApprovedByOrgSlugAndApiSlug('dolore', { apiSlug: 'aliquam', apiVersion: 'iure' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/approved?orgSlug=error&apiSlug=odit&apiVersion=culpa")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.getApprovedByOrgSlugAndApiSlug()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/approved?orgSlug=quas&apiSlug=ut&apiVersion=voluptates")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.getApprovedByOrgSlugAndApiSlug('quas', { apiSlug: 'ut', apiVersion: 'voluptates' })).rejects.toThrow();
    });

  });

  describe("test getAllApprovedByOrgSlugAndApiSlug", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/approved/all?orgSlug=consequatur&apiSlug=quisquam&apiVersion=nam")
        .reply(200, {data: {}});
      return sdk.doc.getAllApprovedByOrgSlugAndApiSlug('consequatur', { apiSlug: 'quisquam', apiVersion: 'nam' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/approved/all?orgSlug=quidem&apiSlug=repellendus&apiVersion=dolores")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.getAllApprovedByOrgSlugAndApiSlug()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/approved/all?orgSlug=dolore&apiSlug=non&apiVersion=ratione")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.getAllApprovedByOrgSlugAndApiSlug('dolore', { apiSlug: 'non', apiVersion: 'ratione' })).rejects.toThrow();
    });

  });

  describe("test findDocs", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs?offset=1&limit=4&artifactId=6")
        .reply(200, {data: {}});
      return sdk.doc.findDocs(1, 4, 6).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs?offset=9&limit=5&artifactId=6")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.findDocs()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs?offset=1&limit=6&artifactId=8")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.findDocs(1, 6, 8)).rejects.toThrow();
    });

  });

  describe("test createDoc", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/docs")
        .reply(200, {data: {}});
      return sdk.doc.createDoc({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

  describe("test approve", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/docs/consequuntur/approve")
        .reply(200, {data: {}});
      return sdk.doc.approve('consequuntur').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/docs/corrupti/approve")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.approve()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/docs/nobis/approve")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.approve('nobis')).rejects.toThrow();
    });

  });

  describe("test unapprove", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/docs/repellendus/unapprove")
        .reply(200, {data: {}});
      return sdk.doc.unapprove('repellendus').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/docs/minima/unapprove")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.unapprove()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/docs/ipsum/unapprove")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.unapprove('ipsum')).rejects.toThrow();
    });

  });

  describe("test getDocById", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/2407876995")
        .reply(200, {data: {}});
      return sdk.doc.getDocById(2407876995).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/7965862870")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.getDocById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/9836497230")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.getDocById(9836497230)).rejects.toThrow();
    });

  });

  describe("test updateDoc", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .put("/docs/8678274622")
        .reply(200, {data: {}});
      return sdk.doc.updateDoc({},8678274622).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .put("/docs/4584950922")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.updateDoc()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .put("/docs/4356676770")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.updateDoc({},4356676770)).rejects.toThrow();
    });

  });

  describe("test removeDoc", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/docs/3122158889")
        .reply(200, {data: {}});
      return sdk.doc.removeDoc(3122158889).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/docs/9528415833")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.removeDoc()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/docs/4754221645")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.removeDoc(4754221645)).rejects.toThrow();
    });

  });

  describe("test getDownloadUrl", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/4898515516/getDownloadUrl")
        .reply(200, {data: {}});
      return sdk.doc.getDownloadUrl(4898515516).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/6210420559/getDownloadUrl")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.getDownloadUrl()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/7217079408/getDownloadUrl")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.getDownloadUrl(7217079408)).rejects.toThrow();
    });

  });

});