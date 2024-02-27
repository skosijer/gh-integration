import nock from 'nock';

import { Liblab } from '../../../src';

import { TagsService } from '../../../src/services/tags/Tags';

describe("test TagsService object", () => {
  it("should be an object", () => {
    expect(typeof TagsService).toBe('function');
  });
});

describe("test Tags", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test search", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/tags?offset=9&limit=3&searchQuery=soluta")
        .reply(200, {data: {}});
      return sdk.tags.search(9, 3, 'soluta').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/tags?offset=8&limit=7&searchQuery=veniam")
        .reply(200, {data: {}});
      return expect(async () => await sdk.tags.search()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/tags?offset=1&limit=5&searchQuery=velit")
        .reply(404, {data: {}});
      return expect(async () => await sdk.tags.search(1, 5, 'velit')).rejects.toThrow();
    });

  });

  describe("test create", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/tags")
        .reply(200, {data: {}});
      return sdk.tags.create({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

});