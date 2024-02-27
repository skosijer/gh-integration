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
        .get("/orgs?offset=5&limit=5&direction=placeat&sortBy=vero")
        .reply(200, {data: {}});
      return sdk.org.getOrgs(5, 5, { direction: 'placeat', sortBy: 'vero' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs?offset=6&limit=5&direction=eaque&sortBy=voluptas")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getOrgs()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs?offset=8&limit=7&direction=animi&sortBy=sequi")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getOrgs(8, 7, { direction: 'animi', sortBy: 'sequi' })).rejects.toThrow();
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
        .get("/orgs/search?offset=6&limit=8&website=sit&domain=quibusdam&name=Else")
        .reply(200, {data: {}});
      return sdk.org.searchOrgs(6, 8, { website: 'sit', domain: 'quibusdam', name: 'Else' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/search?offset=2&limit=6&website=modi&domain=facere&name=Leonora")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.searchOrgs()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/search?offset=8&limit=1&website=quasi&domain=fugit&name=Jamison")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.searchOrgs(8, 1, { website: 'quasi', domain: 'fugit', name: 'Jamison' })).rejects.toThrow();
    });

  });

  describe("test getOrgById", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/7522187713")
        .reply(200, {data: {}});
      return sdk.org.getOrgById(7522187713).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/7176185158")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getOrgById()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/6700186126")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getOrgById(6700186126)).rejects.toThrow();
    });

  });

  describe("test removeOrg", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/1825193991")
        .reply(200, {data: {}});
      return sdk.org.removeOrg(1825193991).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/3066409109")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.removeOrg()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .delete("/orgs/1994443684")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.removeOrg(1994443684)).rejects.toThrow();
    });

  });

  describe("test updateOrg", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/6070328739")
        .reply(200, {data: {}});
      return sdk.org.updateOrg({},6070328739).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/2416995646")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.updateOrg()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .patch("/orgs/8987139765")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.updateOrg({},8987139765)).rejects.toThrow();
    });

  });

  describe("test getApisByOrg", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/1807370410/apis")
        .reply(200, {data: {}});
      return sdk.org.getApisByOrg(1807370410).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/3146949334/apis")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getApisByOrg()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/3515743478/apis")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getApisByOrg(3515743478)).rejects.toThrow();
    });

  });

  describe("test getOrgJobs", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/6346678904/jobs?offset=9&limit=4&sortBy=omnis&direction=tempore&statuses=quis&statuses=nesciunt&createdByIds=culpa&createdByIds=repellat&apiSlug=deleniti&apiVersion=cupiditate&buildType=labore&buildType=voluptate")
        .reply(200, {data: {}});
      return sdk.org.getOrgJobs(6346678904, 9, 4, { sortBy: 'omnis', direction: 'tempore', statuses: ['quis','nesciunt'], createdByIds: ['culpa','repellat'], apiSlug: 'deleniti', apiVersion: 'cupiditate', buildType: ['labore','voluptate'] }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/3147457434/jobs?offset=1&limit=3&sortBy=voluptatem&direction=reprehenderit&statuses=non&statuses=sed&createdByIds=non&createdByIds=quia&apiSlug=et&apiVersion=ipsa&buildType=nihil&buildType=deserunt")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getOrgJobs()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/9953957704/jobs?offset=5&limit=6&sortBy=quidem&direction=praesentium&statuses=nostrum&statuses=optio&createdByIds=suscipit&createdByIds=in&apiSlug=sit&apiVersion=quos&buildType=repudiandae&buildType=quisquam")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getOrgJobs(9953957704, 5, 6, { sortBy: 'quidem', direction: 'praesentium', statuses: ['nostrum','optio'], createdByIds: ['suscipit','in'], apiSlug: 'sit', apiVersion: 'quos', buildType: ['repudiandae','quisquam'] })).rejects.toThrow();
    });

  });

  describe("test getDocsByOrg", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/7215084050/docs")
        .reply(200, {data: {}});
      return sdk.org.getDocsByOrg(7215084050).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/6103932973/docs")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getDocsByOrg()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/6334015712/docs")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getDocsByOrg(6334015712)).rejects.toThrow();
    });

  });

  describe("test getBuildByOrg", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/6398975823/builds?offset=8&limit=4&sortBy=doloremque&direction=doloremque&statuses=neque&statuses=alias&tags=ipsa&tags=iure&createdByIds=perspiciatis&createdByIds=architecto&apiSlug=quod&apiVersion=cum")
        .reply(200, {data: {}});
      return sdk.org.getBuildByOrg(6398975823, 8, 4, { sortBy: 'doloremque', direction: 'doloremque', statuses: ['neque','alias'], tags: ['ipsa','iure'], createdByIds: ['perspiciatis','architecto'], apiSlug: 'quod', apiVersion: 'cum' }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/5631044289/builds?offset=9&limit=4&sortBy=ad&direction=officiis&statuses=maxime&statuses=ipsa&tags=est&tags=sunt&createdByIds=doloribus&createdByIds=nemo&apiSlug=quidem&apiVersion=recusandae")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getBuildByOrg()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/2526111840/builds?offset=6&limit=9&sortBy=quaerat&direction=amet&statuses=soluta&statuses=minus&tags=dolores&tags=occaecati&createdByIds=voluptatibus&createdByIds=quasi&apiSlug=sequi&apiVersion=dignissimos")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getBuildByOrg(2526111840, 6, 9, { sortBy: 'quaerat', direction: 'amet', statuses: ['soluta','minus'], tags: ['dolores','occaecati'], createdByIds: ['voluptatibus','quasi'], apiSlug: 'sequi', apiVersion: 'dignissimos' })).rejects.toThrow();
    });

  });

  describe("test getOrgApiBuilds", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/8121651573/api-builds")
        .reply(200, {data: {}});
      return sdk.org.getOrgApiBuilds(8121651573).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/7332359156/api-builds")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getOrgApiBuilds()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/5462670462/api-builds")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getOrgApiBuilds(5462670462)).rejects.toThrow();
    });

  });

  describe("test getOrgArtifacts", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/1731109420/artifacts?offset=7&limit=3&sortBy=neque&direction=deleniti&artifactTypes=aspernatur&statuses=similique&createdByIds=quaerat&createdByIds=inventore")
        .reply(200, {data: {}});
      return sdk.org.getOrgArtifacts(1731109420, 7, 3, { sortBy: 'neque', direction: 'deleniti', artifactTypes: ['aspernatur'], statuses: ['similique'], createdByIds: ['quaerat','inventore'] }).then((r: any) => expect(r.data).toEqual({}))
    });

    test("test will throw error if required fields missing", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/2777944551/artifacts?offset=7&limit=4&sortBy=perferendis&direction=animi&artifactTypes=suscipit&statuses=dicta&createdByIds=consequuntur&createdByIds=molestias")
        .reply(200, {data: {}});
      return expect(async () => await sdk.org.getOrgArtifacts()).rejects.toThrow();
    });

    test("test will throw error on a non-200 response", () => {
      const scope = nock("https://api-dev.liblab.com")
        .get("/orgs/1435130484/artifacts?offset=8&limit=2&sortBy=sit&direction=fugiat&artifactTypes=nesciunt&statuses=doloremque&createdByIds=nulla&createdByIds=quam")
        .reply(404, {data: {}});
      return expect(async () => await sdk.org.getOrgArtifacts(1435130484, 8, 2, { sortBy: 'sit', direction: 'fugiat', artifactTypes: ['nesciunt'], statuses: ['doloremque'], createdByIds: ['nulla','quam'] })).rejects.toThrow();
    });

  });

});