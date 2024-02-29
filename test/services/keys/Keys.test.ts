import nock from 'nock';

import { Testsdk } from '../../../src';

import { KeysService } from '../../../src/services/keys/Keys';

describe('test KeysService object', () => {
  it('should be an object', () => {
    expect(typeof KeysService).toBe('function');
  });
});

describe('test Keys', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Testsdk({});

    nock.cleanAll();
  });

  describe('test getKeys', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/6029264342/keys')
        .reply(200, { data: {} });
      return sdk.keys.getKeys('6029264342').then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/4111915057/keys')
        .reply(200, { data: {} });
      return expect(async () => await sdk.keys.getKeys()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/7279825079/keys')
        .reply(404, { data: {} });
      return expect(async () => await sdk.keys.getKeys('7279825079')).rejects.toThrow();
    });
  });

  describe('test createKey', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/2984879020/keys')
        .reply(200, { data: {} });
      return sdk.keys
        .createKey({}, '2984879020')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/2756263140/keys')
        .reply(200, { data: {} });
      return expect(async () => await sdk.keys.createKey()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/8100803977/keys')
        .reply(404, { data: {} });
      return expect(async () => await sdk.keys.createKey({}, '8100803977')).rejects.toThrow();
    });
  });

  describe('test updateKey', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .put('/orgs/8558747450/keys/nam')
        .reply(200, { data: {} });
      return sdk.keys
        .updateKey({}, '8558747450', 'nam')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .put('/orgs/4732575724/keys/assumenda')
        .reply(200, { data: {} });
      return expect(async () => await sdk.keys.updateKey()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .put('/orgs/8163082477/keys/molestiae')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.keys.updateKey({}, '8163082477', 'molestiae'),
      ).rejects.toThrow();
    });
  });

  describe('test deleteKey', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .delete('/orgs/6616987762/keys/repellat')
        .reply(200, { data: {} });
      return sdk.keys
        .deleteKey('6616987762', 'repellat')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .delete('/orgs/1204104505/keys/voluptatum')
        .reply(200, { data: {} });
      return expect(async () => await sdk.keys.deleteKey()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .delete('/orgs/3291774517/keys/at')
        .reply(404, { data: {} });
      return expect(async () => await sdk.keys.deleteKey('3291774517', 'at')).rejects.toThrow();
    });
  });
});
