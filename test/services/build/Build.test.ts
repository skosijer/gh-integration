import nock from 'nock';

import { Liblab } from '../../../src';

import { BuildService } from '../../../src/services/build/Build';

describe("test BuildService object", () => {
  it("should be an object", () => {
    expect(typeof BuildService).toBe('function');
  });
});

describe("test Build", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test getBuilds", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/builds?offset=4&limit=1&orgId=8&apiSlug=illo")
        .reply(200, {data: {}});
      return sdk.build.getBuilds(4, 1, 8, 'illo').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/builds?offset=3&limit=6&orgId=6&apiSlug=praesentium")
        .reply(200, {data: {}});
      return expect(async () => await sdk.build.getBuilds()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/builds?offset=2&limit=8&orgId=8&apiSlug=neque")
        .reply(404, {data: {}});
      return expect(async () => await sdk.build.getBuilds(2, 8, 8, 'neque')).rejects.toThrow();
    });

  });

  describe("test createBuild", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/builds")
        .reply(200, {data: {}});
      return sdk.build.createBuild({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

  describe("test getBuildStatuses", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/builds/statuses")
        .reply(200, {data: {}});
      return sdk.build.getBuildStatuses().then((r: any) => expect(r.data).toEqual({}))
    });





  });

  describe("test getById", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/builds/7294166365")
        .reply(200, {data: {}});
      return sdk.build.getById(7294166365).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/builds/3769104086")
        .reply(200, {data: {}});
      return expect(async () => await sdk.build.getById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/builds/4426978451")
        .reply(404, {data: {}});
      return expect(async () => await sdk.build.getById(4426978451)).rejects.toThrow();
    });

  });

  describe("test tag", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/builds/1/tag/8")
        .reply(200, {data: {}});
      return sdk.build.tag(1, 8).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/builds/8/tag/1")
        .reply(200, {data: {}});
      return expect(async () => await sdk.build.tag()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/builds/2/tag/1")
        .reply(404, {data: {}});
      return expect(async () => await sdk.build.tag(2, 1)).rejects.toThrow();
    });

  });

  describe("test untag", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/builds/7/untag/3")
        .reply(200, {data: {}});
      return sdk.build.untag(7, 3).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/builds/4/untag/4")
        .reply(200, {data: {}});
      return expect(async () => await sdk.build.untag()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/builds/8/untag/7")
        .reply(404, {data: {}});
      return expect(async () => await sdk.build.untag(8, 7)).rejects.toThrow();
    });

  });

  describe("test approveBuild", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/builds/4/approve")
        .reply(200, {data: {}});
      return sdk.build.approveBuild(4).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/builds/3/approve")
        .reply(200, {data: {}});
      return expect(async () => await sdk.build.approveBuild()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/builds/7/approve")
        .reply(404, {data: {}});
      return expect(async () => await sdk.build.approveBuild(7)).rejects.toThrow();
    });

  });

  describe("test unApproveBuild", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/builds/4/unapprove")
        .reply(200, {data: {}});
      return sdk.build.unApproveBuild(4).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/builds/8/unapprove")
        .reply(200, {data: {}});
      return expect(async () => await sdk.build.unApproveBuild()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/builds/2/unapprove")
        .reply(404, {data: {}});
      return expect(async () => await sdk.build.unApproveBuild(2)).rejects.toThrow();
    });

  });

});