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
        .get("/builds?offset=7&limit=1&orgId=5&apiSlug=esse")
        .reply(200, {data: {}});
      return sdk.build.getBuilds(7, 1, 5, 'esse').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/builds?offset=5&limit=4&orgId=2&apiSlug=exercitationem")
        .reply(200, {data: {}});
      return expect(async () => await sdk.build.getBuilds()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/builds?offset=6&limit=1&orgId=3&apiSlug=repellendus")
        .reply(404, {data: {}});
      return expect(async () => await sdk.build.getBuilds(6, 1, 3, 'repellendus')).rejects.toThrow();
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
        .get("/builds/9177367072")
        .reply(200, {data: {}});
      return sdk.build.getById(9177367072).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/builds/9338135342")
        .reply(200, {data: {}});
      return expect(async () => await sdk.build.getById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/builds/2044146616")
        .reply(404, {data: {}});
      return expect(async () => await sdk.build.getById(2044146616)).rejects.toThrow();
    });

  });

  describe("test tag", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/builds/3/tag/6")
        .reply(200, {data: {}});
      return sdk.build.tag(3, 6).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/builds/8/tag/7")
        .reply(200, {data: {}});
      return expect(async () => await sdk.build.tag()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/builds/9/tag/4")
        .reply(404, {data: {}});
      return expect(async () => await sdk.build.tag(9, 4)).rejects.toThrow();
    });

  });

  describe("test untag", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/builds/9/untag/8")
        .reply(200, {data: {}});
      return sdk.build.untag(9, 8).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/builds/1/untag/7")
        .reply(200, {data: {}});
      return expect(async () => await sdk.build.untag()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/builds/3/untag/4")
        .reply(404, {data: {}});
      return expect(async () => await sdk.build.untag(3, 4)).rejects.toThrow();
    });

  });

  describe("test approveBuild", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/builds/8/approve")
        .reply(200, {data: {}});
      return sdk.build.approveBuild(8).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/builds/5/approve")
        .reply(200, {data: {}});
      return expect(async () => await sdk.build.approveBuild()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/builds/5/approve")
        .reply(404, {data: {}});
      return expect(async () => await sdk.build.approveBuild(5)).rejects.toThrow();
    });

  });

  describe("test unApproveBuild", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/builds/2/unapprove")
        .reply(200, {data: {}});
      return sdk.build.unApproveBuild(2).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/builds/3/unapprove")
        .reply(200, {data: {}});
      return expect(async () => await sdk.build.unApproveBuild()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/builds/3/unapprove")
        .reply(404, {data: {}});
      return expect(async () => await sdk.build.unApproveBuild(3)).rejects.toThrow();
    });

  });

});