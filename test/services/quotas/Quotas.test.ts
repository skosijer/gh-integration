import nock from 'nock';

import { Testsdk } from '../../../src';

import { QuotasService } from '../../../src/services/quotas/Quotas';

describe('test QuotasService object', () => {
  it('should be an object', () => {
    expect(typeof QuotasService).toBe('function');
  });
});

describe('test Quotas', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Testsdk({});

    nock.cleanAll();
  });

  describe('test createQuota', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/9769078857/quotas')
        .reply(200, { data: {} });
      return sdk.quotas
        .createQuota({}, '9769078857')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/3369280016/quotas')
        .reply(200, { data: {} });
      return expect(async () => await sdk.quotas.createQuota()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/2525308830/quotas')
        .reply(404, { data: {} });
      return expect(async () => await sdk.quotas.createQuota({}, '2525308830')).rejects.toThrow();
    });
  });

  describe('test updateQuota', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .put('/orgs/2389017128/quotas')
        .reply(200, { data: {} });
      return sdk.quotas
        .updateQuota({}, '2389017128')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .put('/orgs/2543543530/quotas')
        .reply(200, { data: {} });
      return expect(async () => await sdk.quotas.updateQuota()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .put('/orgs/6488042705/quotas')
        .reply(404, { data: {} });
      return expect(async () => await sdk.quotas.updateQuota({}, '6488042705')).rejects.toThrow();
    });
  });

  describe('test deleteQuota', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .delete('/orgs/2509299811/quotas')
        .reply(200, { data: {} });
      return sdk.quotas
        .deleteQuota('2509299811')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .delete('/orgs/7447826587/quotas')
        .reply(200, { data: {} });
      return expect(async () => await sdk.quotas.deleteQuota()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .delete('/orgs/6163352961/quotas')
        .reply(404, { data: {} });
      return expect(async () => await sdk.quotas.deleteQuota('6163352961')).rejects.toThrow();
    });
  });
});
