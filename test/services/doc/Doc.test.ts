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
        .get("/docs/approved?orgSlug=laborum&apiSlug=magnam&apiVersion=ea")
        .reply(200, {data: {}});
      return sdk.doc.getApprovedByOrgSlugAndApiSlug('laborum', { apiSlug: 'magnam', apiVersion: 'ea' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/approved?orgSlug=explicabo&apiSlug=dolorem&apiVersion=recusandae")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.getApprovedByOrgSlugAndApiSlug()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/approved?orgSlug=maiores&apiSlug=ex&apiVersion=quaerat")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.getApprovedByOrgSlugAndApiSlug('maiores', { apiSlug: 'ex', apiVersion: 'quaerat' })).rejects.toThrow();
    });

  });

  describe("test getAllApprovedByOrgSlugAndApiSlug", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/approved/all?orgSlug=enim&apiSlug=a&apiVersion=laudantium")
        .reply(200, {data: {}});
      return sdk.doc.getAllApprovedByOrgSlugAndApiSlug('enim', { apiSlug: 'a', apiVersion: 'laudantium' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/approved/all?orgSlug=id&apiSlug=eos&apiVersion=nulla")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.getAllApprovedByOrgSlugAndApiSlug()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/approved/all?orgSlug=deleniti&apiSlug=maxime&apiVersion=quod")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.getAllApprovedByOrgSlugAndApiSlug('deleniti', { apiSlug: 'maxime', apiVersion: 'quod' })).rejects.toThrow();
    });

  });

  describe("test findDocs", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs?offset=9&limit=3&artifactId=3")
        .reply(200, {data: {}});
      return sdk.doc.findDocs(9, 3, 3).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs?offset=7&limit=1&artifactId=8")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.findDocs()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs?offset=5&limit=7&artifactId=1")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.findDocs(5, 7, 1)).rejects.toThrow();
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
        .post("/docs/illum/approve")
        .reply(200, {data: {}});
      return sdk.doc.approve('illum').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/docs/reprehenderit/approve")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.approve()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/docs/fuga/approve")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.approve('fuga')).rejects.toThrow();
    });

  });

  describe("test unapprove", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/docs/facilis/unapprove")
        .reply(200, {data: {}});
      return sdk.doc.unapprove('facilis').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/docs/laborum/unapprove")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.unapprove()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/docs/error/unapprove")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.unapprove('error')).rejects.toThrow();
    });

  });

  describe("test getDocById", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/7627889174")
        .reply(200, {data: {}});
      return sdk.doc.getDocById(7627889174).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/9381591652")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.getDocById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/3964200971")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.getDocById(3964200971)).rejects.toThrow();
    });

  });

  describe("test updateDoc", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .put("/docs/9475591697")
        .reply(200, {data: {}});
      return sdk.doc.updateDoc({},9475591697).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .put("/docs/6541291507")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.updateDoc()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .put("/docs/2989481496")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.updateDoc({},2989481496)).rejects.toThrow();
    });

  });

  describe("test removeDoc", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/docs/9424094335")
        .reply(200, {data: {}});
      return sdk.doc.removeDoc(9424094335).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/docs/7781494242")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.removeDoc()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/docs/5390558154")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.removeDoc(5390558154)).rejects.toThrow();
    });

  });

  describe("test getDownloadUrl", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/1629822017/getDownloadUrl")
        .reply(200, {data: {}});
      return sdk.doc.getDownloadUrl(1629822017).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/2426703508/getDownloadUrl")
        .reply(200, {data: {}});
      return expect(async () => await sdk.doc.getDownloadUrl()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/docs/9659179422/getDownloadUrl")
        .reply(404, {data: {}});
      return expect(async () => await sdk.doc.getDownloadUrl(9659179422)).rejects.toThrow();
    });

  });

});