import nock from 'nock';

import { Liblab } from '../../../src';

import { FeedbackService } from '../../../src/services/feedback/Feedback';

describe("test FeedbackService object", () => {
  it("should be an object", () => {
    expect(typeof FeedbackService).toBe('function');
  });
});

describe("test Feedback", () => {

  let sdk: any;

  beforeEach(() => {

    sdk = new Liblab({});

    nock.cleanAll();

  });

  describe("test sendFeedback", () => {

    test("test api call", () => {
      const scope = nock("https://api-dev.liblab.com")
        .post("/feedback")
        .reply(200, {data: {}});
      return sdk.feedback.sendFeedback({},).then((r: any) => expect(r.data).toEqual({}))
    });





  });

});