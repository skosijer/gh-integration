import nock from 'nock';

import { Testsdk } from '../../../src';

import { EnginesService } from '../../../src/services/engines/Engines';

describe('test EnginesService object', () => {
  it('should be an object', () => {
    expect(typeof EnginesService).toBe('function');
  });
});

describe('test Engines', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Testsdk({});

    nock.cleanAll();
  });

  describe('test getEngines', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/6989661991/engines?page=1&size=3')
        .reply(200, { data: {} });
      return sdk.engines
        .getEngines('6989661991', { page: 1, size: 3 })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/1312827495/engines?page=3&size=3')
        .reply(200, { data: {} });
      return expect(async () => await sdk.engines.getEngines()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/7438809563/engines?page=2&size=6')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.engines.getEngines('7438809563', { page: 2, size: 6 }),
      ).rejects.toThrow();
    });
  });

  describe('test getEngine', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/7295634281/engines/1612905827')
        .reply(200, { data: {} });
      return sdk.engines
        .getEngine('7295634281', '1612905827')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/3885261794/engines/3109206835')
        .reply(200, { data: {} });
      return expect(async () => await sdk.engines.getEngine()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/8795068735/engines/7835616334')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.engines.getEngine('8795068735', '7835616334'),
      ).rejects.toThrow();
    });
  });
});
