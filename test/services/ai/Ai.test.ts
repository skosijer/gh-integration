import nock from 'nock';

import { Liblab } from '../../../src';

import { AiService } from '../../../src/services/ai/Ai';

describe("test AiService object", () => {
  it("should be an object", () => {
    expect(typeof AiService).toBe('function');
  });
});

describe("test Ai", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test askAboutSpec", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/ai/ask-about-spec")
        .reply(200, {data: {}});
      return sdk.ai.askAboutSpec({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

});