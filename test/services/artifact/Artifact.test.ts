import nock from 'nock';

import { Liblab } from '../../../src';

import { ArtifactService } from '../../../src/services/artifact/Artifact';

describe("test ArtifactService object", () => {
  it("should be an object", () => {
    expect(typeof ArtifactService).toBe('function');
  });
});

describe("test Artifact", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test getArtifacts", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/artifacts?buildId=7")
        .reply(200, {data: {}});
      return sdk.artifact.getArtifacts(7).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/artifacts?buildId=7")
        .reply(200, {data: {}});
      return expect(async () => await sdk.artifact.getArtifacts()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/artifacts?buildId=9")
        .reply(404, {data: {}});
      return expect(async () => await sdk.artifact.getArtifacts(9)).rejects.toThrow();
    });

  });

  describe("test createArtifact", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/artifacts")
        .reply(200, {data: {}});
      return sdk.artifact.createArtifact({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

  describe("test getArtifactStatuses", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/artifacts/statuses")
        .reply(200, {data: {}});
      return sdk.artifact.getArtifactStatuses().then((r: any) => expect(r.data).toEqual({}))
    });





  });

  describe("test getArtifactById", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/artifacts/4394981921")
        .reply(200, {data: {}});
      return sdk.artifact.getArtifactById(4394981921).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/artifacts/1204569045")
        .reply(200, {data: {}});
      return expect(async () => await sdk.artifact.getArtifactById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/artifacts/1105189694")
        .reply(404, {data: {}});
      return expect(async () => await sdk.artifact.getArtifactById(1105189694)).rejects.toThrow();
    });

  });

  describe("test removeArtifact", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/artifacts/1238216372")
        .reply(200, {data: {}});
      return sdk.artifact.removeArtifact(1238216372).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/artifacts/3595933779")
        .reply(200, {data: {}});
      return expect(async () => await sdk.artifact.removeArtifact()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/artifacts/6280168428")
        .reply(404, {data: {}});
      return expect(async () => await sdk.artifact.removeArtifact(6280168428)).rejects.toThrow();
    });

  });

});