import nock from 'nock';

import { Liblab } from '../../../src';

import { SpecService } from '../../../src/services/spec/Spec';

describe("test SpecService object", () => {
  it("should be an object", () => {
    expect(typeof SpecService).toBe('function');
  });
});

describe("test Spec", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test validateSpec", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/spec/validate")
        .reply(200, {data: {}});
      return sdk.spec.validateSpec({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

});