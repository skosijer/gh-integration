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
        .get("/apis/9610010998/builds?offset=4&limit=7&sortBy=provident&direction=corporis&statuses=tenetur&statuses=reprehenderit&tags=voluptate&tags=laboriosam&createdByIds=architecto&createdByIds=delectus")
        .reply(200, {data: {}});
      return sdk.api.getApiBuilds(9610010998, 4, 7, { sortBy: 'provident', direction: 'corporis', statuses: ['tenetur','reprehenderit'], tags: ['voluptate','laboriosam'], createdByIds: ['architecto','delectus'] }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/8575677895/builds?offset=2&limit=5&sortBy=iste&direction=praesentium&statuses=magni&statuses=reiciendis&tags=aut&tags=similique&createdByIds=eveniet&createdByIds=hic")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApiBuilds()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/5443016171/builds?offset=9&limit=9&sortBy=nisi&direction=ratione&statuses=dicta&statuses=voluptate&tags=eaque&tags=quis&createdByIds=facilis&createdByIds=perspiciatis")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApiBuilds(5443016171, 9, 9, { sortBy: 'nisi', direction: 'ratione', statuses: ['dicta','voluptate'], tags: ['eaque','quis'], createdByIds: ['facilis','perspiciatis'] })).rejects.toThrow();
    });

  });

  describe("test getApiBuildTags", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/1724841937/builds/tags")
        .reply(200, {data: {}});
      return sdk.api.getApiBuildTags(1724841937).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/7963375560/builds/tags")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApiBuildTags()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/1966122703/builds/tags")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApiBuildTags(1966122703)).rejects.toThrow();
    });

  });

  describe("test getApiSdks", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/9049939968/sdks?offset=2&limit=3&statuses=distinctio&statuses=necessitatibus&tags=esse&tags=nobis&createdByIds=necessitatibus&createdByIds=vero&languages=ratione&languages=repellendus&sortBy=sequi&direction=asperiores")
        .reply(200, {data: {}});
      return sdk.api.getApiSdks(9049939968, 2, 3, { statuses: ['distinctio','necessitatibus'], tags: ['esse','nobis'], createdByIds: ['necessitatibus','vero'], languages: ['ratione','repellendus'], sortBy: 'sequi', direction: 'asperiores' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/4488805785/sdks?offset=6&limit=7&statuses=maxime&statuses=ex&tags=eos&tags=sunt&createdByIds=ipsa&createdByIds=molestiae&languages=minus&languages=enim&sortBy=facilis&direction=molestiae")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApiSdks()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/1983575962/sdks?offset=1&limit=9&statuses=molestias&statuses=praesentium&tags=sapiente&tags=natus&createdByIds=praesentium&createdByIds=asperiores&languages=placeat&languages=nostrum&sortBy=neque&direction=corporis")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApiSdks(1983575962, 1, 9, { statuses: ['molestias','praesentium'], tags: ['sapiente','natus'], createdByIds: ['praesentium','asperiores'], languages: ['placeat','nostrum'], sortBy: 'neque', direction: 'corporis' })).rejects.toThrow();
    });

  });

  describe("test getApiDocs", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/7705547832/docs?offset=7&limit=3&sortBy=inventore&direction=iste&statuses=eligendi&statuses=ex&tags=eligendi&tags=ex&createdByIds=voluptates&createdByIds=pariatur")
        .reply(200, {data: {}});
      return sdk.api.getApiDocs(7705547832, 7, 3, { sortBy: 'inventore', direction: 'iste', statuses: ['eligendi','ex'], tags: ['eligendi','ex'], createdByIds: ['voluptates','pariatur'] }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/2711856938/docs?offset=5&limit=4&sortBy=quod&direction=illo&statuses=doloremque&statuses=minima&tags=quidem&tags=aspernatur&createdByIds=consequatur&createdByIds=dignissimos")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApiDocs()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/8514357709/docs?offset=6&limit=3&sortBy=aut&direction=incidunt&statuses=tenetur&statuses=facilis&tags=ipsa&tags=dignissimos&createdByIds=et&createdByIds=voluptatibus")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApiDocs(8514357709, 6, 3, { sortBy: 'aut', direction: 'incidunt', statuses: ['tenetur','facilis'], tags: ['ipsa','dignissimos'], createdByIds: ['et','voluptatibus'] })).rejects.toThrow();
    });

  });

  describe("test getApis", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis?orgId=6&apiSlug=ipsum")
        .reply(200, {data: {}});
      return sdk.api.getApis(6, { apiSlug: 'ipsum' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis?orgId=5&apiSlug=non")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApis()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis?orgId=4&apiSlug=ea")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApis(4, { apiSlug: 'ea' })).rejects.toThrow();
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
        .get("/apis/search?offset=7&limit=2&name=Adrian&sortBy=laborum&orgId=8&direction=ipsa&orgIds=id&orgIds=reiciendis")
        .reply(200, {data: {}});
      return sdk.api.searchApis(7, 2, { name: 'Adrian', sortBy: 'laborum', orgId: 8, direction: 'ipsa', orgIds: ['id','reiciendis'] }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/search?offset=6&limit=1&name=Tianna&sortBy=eaque&orgId=7&direction=adipisci&orgIds=exercitationem&orgIds=magnam")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.searchApis()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/search?offset=5&limit=9&name=Ella&sortBy=nam&orgId=2&direction=corporis&orgIds=similique&orgIds=similique")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.searchApis(5, 9, { name: 'Ella', sortBy: 'nam', orgId: 2, direction: 'corporis', orgIds: ['similique','similique'] })).rejects.toThrow();
    });

  });

  describe("test getApiById", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/6703206417")
        .reply(200, {data: {}});
      return sdk.api.getApiById(6703206417).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/8896004105")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApiById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/2436347498")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApiById(2436347498)).rejects.toThrow();
    });

  });

  describe("test removeApi", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/apis/5683779541")
        .reply(200, {data: {}});
      return sdk.api.removeApi(5683779541).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/apis/3533390471")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.removeApi()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/apis/2922942254")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.removeApi(2922942254)).rejects.toThrow();
    });

  });

  describe("test updateApi", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/apis/4160588104")
        .reply(200, {data: {}});
      return sdk.api.updateApi({},4160588104).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/apis/1200789663")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.updateApi()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/apis/9642853735")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.updateApi({},9642853735)).rejects.toThrow();
    });

  });

  describe("test getApiMembers", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/7058851259/members")
        .reply(200, {data: {}});
      return sdk.api.getApiMembers(7058851259).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/3237545671/members")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApiMembers()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/6921414130/members")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApiMembers(6921414130)).rejects.toThrow();
    });

  });

  describe("test getApiByOrgSlugAndApiSlug", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/quas/suscipit")
        .reply(200, {data: {}});
      return sdk.api.getApiByOrgSlugAndApiSlug('quas', 'suscipit').then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/culpa/possimus")
        .reply(200, {data: {}});
      return expect(async () => await sdk.api.getApiByOrgSlugAndApiSlug()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/apis/officia/cupiditate")
        .reply(404, {data: {}});
      return expect(async () => await sdk.api.getApiByOrgSlugAndApiSlug('officia', 'cupiditate')).rejects.toThrow();
    });

  });

});