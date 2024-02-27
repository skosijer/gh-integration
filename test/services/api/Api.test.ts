import nock from 'nock';

import { Liblab } from '../../../src';

import { ApiService } from '../../../src/services/api/Api';

describe("test ApiService object", () => {
  it("should be an object", () => {
    expect(typeof ApiService).toBe('function');
  });
});

describe("test Api", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test getApiBuilds", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/9055228285/builds?offset=3&limit=2&sortBy=dolores&direction=quisquam&statuses=rerum&statuses=repellat&tags=praesentium&tags=necessitatibus&createdByIds=ut&createdByIds=odio")
        .reply(200, {data: {}});
      return sdk.api.getApiBuilds(9055228285, 3, 2, { sortBy: 'dolores', direction: 'quisquam', statuses: ['rerum','repellat'], tags: ['praesentium','necessitatibus'], createdByIds: ['ut','odio'] }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/7346101964/builds?offset=3&limit=3&sortBy=blanditiis&direction=perferendis&statuses=quos&statuses=adipisci&tags=quas&tags=quasi&createdByIds=impedit&createdByIds=reiciendis")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApiBuilds()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/8561935681/builds?offset=7&limit=4&sortBy=est&direction=error&statuses=architecto&statuses=optio&tags=deserunt&tags=veritatis&createdByIds=officia&createdByIds=asperiores")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApiBuilds(8561935681, 7, 4, { sortBy: 'est', direction: 'error', statuses: ['architecto','optio'], tags: ['deserunt','veritatis'], createdByIds: ['officia','asperiores'] })).rejects.toThrow();
    });

  });

  describe("test getApiBuildTags", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/8416030577/builds/tags")
        .reply(200, {data: {}});
      return sdk.api.getApiBuildTags(8416030577).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/6846063051/builds/tags")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApiBuildTags()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/5915117807/builds/tags")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApiBuildTags(5915117807)).rejects.toThrow();
    });

  });

  describe("test getApiSdks", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/6891593455/sdks?offset=2&limit=6&statuses=molestias&statuses=ratione&tags=architecto&tags=veniam&createdByIds=iusto&createdByIds=temporibus&languages=facere&languages=consequuntur&sortBy=temporibus&direction=quisquam")
        .reply(200, {data: {}});
      return sdk.api.getApiSdks(6891593455, 2, 6, { statuses: ['molestias','ratione'], tags: ['architecto','veniam'], createdByIds: ['iusto','temporibus'], languages: ['facere','consequuntur'], sortBy: 'temporibus', direction: 'quisquam' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/7033926269/sdks?offset=1&limit=7&statuses=sapiente&statuses=quo&tags=consectetur&tags=excepturi&createdByIds=non&createdByIds=dolore&languages=laboriosam&languages=fugiat&sortBy=laudantium&direction=cum")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApiSdks()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/5630274797/sdks?offset=3&limit=5&statuses=provident&statuses=aliquid&tags=quod&tags=consectetur&createdByIds=qui&createdByIds=laboriosam&languages=vel&languages=deserunt&sortBy=laudantium&direction=magnam")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApiSdks(5630274797, 3, 5, { statuses: ['provident','aliquid'], tags: ['quod','consectetur'], createdByIds: ['qui','laboriosam'], languages: ['vel','deserunt'], sortBy: 'laudantium', direction: 'magnam' })).rejects.toThrow();
    });

  });

  describe("test getApiDocs", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/3496210106/docs?offset=4&limit=1&sortBy=ea&direction=saepe&statuses=nam&statuses=maiores&tags=veritatis&tags=officiis&createdByIds=vero&createdByIds=voluptatum")
        .reply(200, {data: {}});
      return sdk.api.getApiDocs(3496210106, 4, 1, { sortBy: 'ea', direction: 'saepe', statuses: ['nam','maiores'], tags: ['veritatis','officiis'], createdByIds: ['vero','voluptatum'] }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/8182989361/docs?offset=8&limit=8&sortBy=aperiam&direction=asperiores&statuses=autem&statuses=assumenda&tags=mollitia&tags=accusamus&createdByIds=ex&createdByIds=animi")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApiDocs()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/5071233916/docs?offset=1&limit=3&sortBy=nisi&direction=magni&statuses=consectetur&statuses=laboriosam&tags=officia&tags=autem&createdByIds=necessitatibus&createdByIds=minus")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApiDocs(5071233916, 1, 3, { sortBy: 'nisi', direction: 'magni', statuses: ['consectetur','laboriosam'], tags: ['officia','autem'], createdByIds: ['necessitatibus','minus'] })).rejects.toThrow();
    });

  });

  describe("test getApis", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis?orgId=8&apiSlug=est")
        .reply(200, {data: {}});
      return sdk.api.getApis(8, { apiSlug: 'est' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis?orgId=7&apiSlug=impedit")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApis()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis?orgId=5&apiSlug=incidunt")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApis(5, { apiSlug: 'incidunt' })).rejects.toThrow();
    });

  });

  describe("test createApi", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/apis")
        .reply(200, {data: {}});
      return sdk.api.createApi({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

  describe("test searchApis", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/search?offset=3&limit=3&name=Imani&sortBy=id&orgId=3&direction=eos&orgIds=ab&orgIds=dignissimos")
        .reply(200, {data: {}});
      return sdk.api.searchApis(3, 3, { name: 'Imani', sortBy: 'id', orgId: 3, direction: 'eos', orgIds: ['ab','dignissimos'] }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/search?offset=5&limit=7&name=Wilber&sortBy=quia&orgId=6&direction=non&orgIds=error&orgIds=dicta")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.searchApis()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/search?offset=3&limit=7&name=Raoul&sortBy=eveniet&orgId=9&direction=cum&orgIds=laborum&orgIds=rem")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.searchApis(3, 7, { name: 'Raoul', sortBy: 'eveniet', orgId: 9, direction: 'cum', orgIds: ['laborum','rem'] })).rejects.toThrow();
    });

  });

  describe("test getApiById", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/4462199743")
        .reply(200, {data: {}});
      return sdk.api.getApiById(4462199743).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/1360019696")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApiById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/8576727798")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApiById(8576727798)).rejects.toThrow();
    });

  });

  describe("test removeApi", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/apis/2828548435")
        .reply(200, {data: {}});
      return sdk.api.removeApi(2828548435).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/apis/1838149613")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.removeApi()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/apis/5673527698")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.removeApi(5673527698)).rejects.toThrow();
    });

  });

  describe("test updateApi", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/apis/5575409517")
        .reply(200, {data: {}});
      return sdk.api.updateApi({},5575409517).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/apis/3214705366")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.updateApi()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/apis/2626977254")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.updateApi({},2626977254)).rejects.toThrow();
    });

  });

  describe("test getApiMembers", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/2389358807/members")
        .reply(200, {data: {}});
      return sdk.api.getApiMembers(2389358807).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/1052112284/members")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApiMembers()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/9862099928/members")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApiMembers(9862099928)).rejects.toThrow();
    });

  });

  describe("test getApiByOrgSlugAndApiSlug", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/dignissimos/dignissimos")
        .reply(200, {data: {}});
      return sdk.api.getApiByOrgSlugAndApiSlug('dignissimos', 'dignissimos').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/officiis/accusantium")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApiByOrgSlugAndApiSlug()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/ducimus/eaque")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApiByOrgSlugAndApiSlug('ducimus', 'eaque')).rejects.toThrow();
    });

  });

});