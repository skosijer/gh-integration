import nock from 'nock';

import { Liblab } from '../../../src';

import { OrgService } from '../../../src/services/org/Org';

describe("test OrgService object", () => {
  it("should be an object", () => {
    expect(typeof OrgService).toBe('function');
  });
});

describe("test Org", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test getOrgs", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs?offset=2&limit=6&direction=distinctio&sortBy=cupiditate")
        .reply(200, {data: {}});
      return sdk.org.getOrgs(2, 6, { direction: 'distinctio', sortBy: 'cupiditate' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs?offset=5&limit=8&direction=dignissimos&sortBy=sapiente")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getOrgs()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs?offset=6&limit=9&direction=quia&sortBy=delectus")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getOrgs(6, 9, { direction: 'quia', sortBy: 'delectus' })).rejects.toThrow();
    });

  });

  describe("test createOrg", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/orgs")
        .reply(200, {data: {}});
      return sdk.org.createOrg({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

  describe("test searchOrgs", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/search?offset=7&limit=2&website=quae&domain=odio&name=Graciela")
        .reply(200, {data: {}});
      return sdk.org.searchOrgs(7, 2, { website: 'quae', domain: 'odio', name: 'Graciela' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/search?offset=4&limit=3&website=non&domain=magnam&name=Carissa")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.searchOrgs()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/search?offset=9&limit=3&website=maiores&domain=accusamus&name=Shawna")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.searchOrgs(9, 3, { website: 'maiores', domain: 'accusamus', name: 'Shawna' })).rejects.toThrow();
    });

  });

  describe("test getOrgById", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/7493877018")
        .reply(200, {data: {}});
      return sdk.org.getOrgById(7493877018).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/6795295591")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getOrgById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/1223881644")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getOrgById(1223881644)).rejects.toThrow();
    });

  });

  describe("test removeOrg", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/8350436221")
        .reply(200, {data: {}});
      return sdk.org.removeOrg(8350436221).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/2371258962")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.removeOrg()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/9045783264")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.removeOrg(9045783264)).rejects.toThrow();
    });

  });

  describe("test updateOrg", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/1705744761")
        .reply(200, {data: {}});
      return sdk.org.updateOrg({},1705744761).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/4679286001")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.updateOrg()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/3909942398")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.updateOrg({},3909942398)).rejects.toThrow();
    });

  });

  describe("test getApisByOrg", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/7261842340/apis")
        .reply(200, {data: {}});
      return sdk.org.getApisByOrg(7261842340).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/3297560264/apis")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getApisByOrg()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/1161087205/apis")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getApisByOrg(1161087205)).rejects.toThrow();
    });

  });

  describe("test getOrgJobs", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/3904923275/jobs?offset=5&limit=5&sortBy=sint&direction=aut&statuses=deserunt&statuses=quibusdam&createdByIds=alias&createdByIds=tenetur&apiSlug=sint&apiVersion=praesentium&buildType=eius&buildType=unde")
        .reply(200, {data: {}});
      return sdk.org.getOrgJobs(3904923275, 5, 5, { sortBy: 'sint', direction: 'aut', statuses: ['deserunt','quibusdam'], createdByIds: ['alias','tenetur'], apiSlug: 'sint', apiVersion: 'praesentium', buildType: ['eius','unde'] }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/5384193070/jobs?offset=6&limit=8&sortBy=iusto&direction=at&statuses=ad&statuses=nesciunt&createdByIds=explicabo&createdByIds=tenetur&apiSlug=repellat&apiVersion=nostrum&buildType=officiis&buildType=ex")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getOrgJobs()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/2447073486/jobs?offset=1&limit=7&sortBy=cumque&direction=esse&statuses=nulla&statuses=tenetur&createdByIds=accusamus&createdByIds=quae&apiSlug=quis&apiVersion=ex&buildType=quisquam&buildType=alias")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getOrgJobs(2447073486, 1, 7, { sortBy: 'cumque', direction: 'esse', statuses: ['nulla','tenetur'], createdByIds: ['accusamus','quae'], apiSlug: 'quis', apiVersion: 'ex', buildType: ['quisquam','alias'] })).rejects.toThrow();
    });

  });

  describe("test getDocsByOrg", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/5098266241/docs")
        .reply(200, {data: {}});
      return sdk.org.getDocsByOrg(5098266241).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/8621006000/docs")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getDocsByOrg()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/3574661984/docs")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getDocsByOrg(3574661984)).rejects.toThrow();
    });

  });

  describe("test getBuildByOrg", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/3193370422/builds?offset=3&limit=5&sortBy=ipsum&direction=deleniti&statuses=officia&statuses=modi&tags=earum&tags=adipisci&createdByIds=dolorem&createdByIds=a&apiSlug=delectus&apiVersion=nulla")
        .reply(200, {data: {}});
      return sdk.org.getBuildByOrg(3193370422, 3, 5, { sortBy: 'ipsum', direction: 'deleniti', statuses: ['officia','modi'], tags: ['earum','adipisci'], createdByIds: ['dolorem','a'], apiSlug: 'delectus', apiVersion: 'nulla' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/6942208729/builds?offset=1&limit=5&sortBy=tempore&direction=quia&statuses=voluptas&statuses=aliquid&tags=minus&tags=dolor&createdByIds=est&createdByIds=sed&apiSlug=placeat&apiVersion=vitae")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getBuildByOrg()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/6833026785/builds?offset=6&limit=1&sortBy=sunt&direction=reiciendis&statuses=id&statuses=iste&tags=dolores&tags=aliquam&createdByIds=veniam&createdByIds=omnis&apiSlug=eligendi&apiVersion=molestias")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getBuildByOrg(6833026785, 6, 1, { sortBy: 'sunt', direction: 'reiciendis', statuses: ['id','iste'], tags: ['dolores','aliquam'], createdByIds: ['veniam','omnis'], apiSlug: 'eligendi', apiVersion: 'molestias' })).rejects.toThrow();
    });

  });

  describe("test getOrgApiBuilds", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/4550296188/api-builds")
        .reply(200, {data: {}});
      return sdk.org.getOrgApiBuilds(4550296188).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/6732745858/api-builds")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getOrgApiBuilds()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/5415027806/api-builds")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getOrgApiBuilds(5415027806)).rejects.toThrow();
    });

  });

  describe("test getOrgArtifacts", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/1245509642/artifacts?offset=7&limit=6&sortBy=qui&direction=odio&artifactTypes=inventore&statuses=reiciendis&createdByIds=nisi&createdByIds=minus")
        .reply(200, {data: {}});
      return sdk.org.getOrgArtifacts(1245509642, 7, 6, { sortBy: 'qui', direction: 'odio', artifactTypes: ['inventore'], statuses: ['reiciendis'], createdByIds: ['nisi','minus'] }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/9050082293/artifacts?offset=8&limit=1&sortBy=deserunt&direction=dicta&artifactTypes=sunt&statuses=totam&createdByIds=ipsam&createdByIds=autem")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getOrgArtifacts()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/8724218719/artifacts?offset=9&limit=3&sortBy=illum&direction=enim&artifactTypes=a&statuses=facilis&createdByIds=repudiandae&createdByIds=suscipit")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getOrgArtifacts(8724218719, 9, 3, { sortBy: 'illum', direction: 'enim', artifactTypes: ['a'], statuses: ['facilis'], createdByIds: ['repudiandae','suscipit'] })).rejects.toThrow();
    });

  });

});