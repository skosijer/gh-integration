import nock from 'nock';

import { Testsdk } from '../../../src';

import { BlocklistsService } from '../../../src/services/blocklists/Blocklists';

describe('test BlocklistsService object', () => {
  it('should be an object', () => {
    expect(typeof BlocklistsService).toBe('function');
  });
});

describe('test Blocklists', () => {
  let sdk: any;

  beforeEach(() => {
    sdk = new Testsdk({});

    nock.cleanAll();
  });

  describe('test getBlocklists', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get(
          '/orgs/5844195057/blocklists?page=6&page_size=4&with_public=true&with_owned=true&with_shared=true&subscribed_only=true',
        )
        .reply(200, { data: {} });
      return sdk.blocklists
        .getBlocklists('5844195057', {
          page: 6,
          pageSize: 4,
          withPublic: true,
          withOwned: true,
          withShared: true,
          subscribedOnly: true,
        })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get(
          '/orgs/7124234308/blocklists?page=8&page_size=5&with_public=true&with_owned=true&with_shared=true&subscribed_only=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.blocklists.getBlocklists()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get(
          '/orgs/8711795984/blocklists?page=8&page_size=6&with_public=true&with_owned=true&with_shared=true&subscribed_only=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.blocklists.getBlocklists('8711795984', {
            page: 8,
            pageSize: 6,
            withPublic: true,
            withOwned: true,
            withShared: true,
            subscribedOnly: true,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test createBlocklist', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/1787536832/blocklists')
        .reply(200, { data: {} });
      return sdk.blocklists
        .createBlocklist({}, '1787536832')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/9529893000/blocklists')
        .reply(200, { data: {} });
      return expect(async () => await sdk.blocklists.createBlocklist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/9075852446/blocklists')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.blocklists.createBlocklist({}, '9075852446'),
      ).rejects.toThrow();
    });
  });

  describe('test getBlocklist', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/9072013366/blocklists/9538662238?with_shared=true&with_public=true')
        .reply(200, { data: {} });
      return sdk.blocklists
        .getBlocklist('9072013366', '9538662238', { withShared: true, withPublic: true })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/3133628462/blocklists/6137449004?with_shared=true&with_public=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.blocklists.getBlocklist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/7209807375/blocklists/3859704768?with_shared=true&with_public=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.blocklists.getBlocklist('7209807375', '3859704768', {
            withShared: true,
            withPublic: true,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test updateBlocklist', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .put('/orgs/5558827158/blocklists/9608339787')
        .reply(200, { data: {} });
      return sdk.blocklists
        .updateBlocklist({}, '5558827158', '9608339787')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .put('/orgs/1554131747/blocklists/5024864176')
        .reply(200, { data: {} });
      return expect(async () => await sdk.blocklists.updateBlocklist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .put('/orgs/6630063015/blocklists/1113422482')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.blocklists.updateBlocklist({}, '6630063015', '1113422482'),
      ).rejects.toThrow();
    });
  });

  describe('test deleteBlocklist', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .delete('/orgs/6287066013/blocklists/2246083082?force=true')
        .reply(200, { data: {} });
      return sdk.blocklists
        .deleteBlocklist('6287066013', '2246083082', { force: true })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .delete('/orgs/3293678057/blocklists/4147215067?force=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.blocklists.deleteBlocklist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .delete('/orgs/5970170028/blocklists/5537227323?force=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.blocklists.deleteBlocklist('5970170028', '5537227323', { force: true }),
      ).rejects.toThrow();
    });
  });

  describe('test uploadBlocklistContent', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post(
          '/orgs/3831366049/blocklists/7683713660/upload?expiration=officia&ignore_invalid_ips=true&overwrite=true',
        )
        .reply(200, { data: {} });
      return sdk.blocklists
        .uploadBlocklistContent({}, '3831366049', '7683713660', {
          expiration: 'officia',
          ignoreInvalidIps: true,
          overwrite: true,
        })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post(
          '/orgs/4603730553/blocklists/3204897041/upload?expiration=accusantium&ignore_invalid_ips=true&overwrite=true',
        )
        .reply(200, { data: {} });
      return expect(async () => await sdk.blocklists.uploadBlocklistContent()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post(
          '/orgs/8307716873/blocklists/8146616546/upload?expiration=illo&ignore_invalid_ips=true&overwrite=true',
        )
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.blocklists.uploadBlocklistContent({}, '8307716873', '8146616546', {
            expiration: 'illo',
            ignoreInvalidIps: true,
            overwrite: true,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test addIpsToBlocklist', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/6557061468/blocklists/2898732174/ips?overwrite=true')
        .reply(200, { data: {} });
      return sdk.blocklists
        .addIpsToBlocklist({}, '6557061468', '2898732174', { overwrite: true })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/6856698695/blocklists/7420930742/ips?overwrite=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.blocklists.addIpsToBlocklist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/5051070517/blocklists/3125066069/ips?overwrite=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.blocklists.addIpsToBlocklist({}, '5051070517', '3125066069', {
            overwrite: true,
          }),
      ).rejects.toThrow();
    });
  });

  describe('test deleteIpsFromBlocklist', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/5530802574/blocklists/2099876996/ips/delete')
        .reply(200, { data: {} });
      return sdk.blocklists
        .deleteIpsFromBlocklist({}, '5530802574', '2099876996')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/1143851593/blocklists/5867180928/ips/delete')
        .reply(200, { data: {} });
      return expect(async () => await sdk.blocklists.deleteIpsFromBlocklist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/1420794621/blocklists/7195995584/ips/delete')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.blocklists.deleteIpsFromBlocklist({}, '1420794621', '7195995584'),
      ).rejects.toThrow();
    });
  });

  describe('test downloadBlocklistContent', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/4366881832/blocklists/3712768770/download')
        .reply(200, { data: {} });
      return sdk.blocklists
        .downloadBlocklistContent({}, '4366881832', '3712768770')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/7446396591/blocklists/9233907864/download')
        .reply(200, { data: {} });
      return expect(async () => await sdk.blocklists.downloadBlocklistContent()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/9957801102/blocklists/9574824127/download')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.blocklists.downloadBlocklistContent({}, '9957801102', '9574824127'),
      ).rejects.toThrow();
    });
  });

  describe('test subscribeBlocklist', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/8315882409/blocklists/2340932649/subscribe')
        .reply(200, { data: {} });
      return sdk.blocklists
        .subscribeBlocklist({}, '8315882409', '2340932649')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/6036345279/blocklists/8819488598/subscribe')
        .reply(200, { data: {} });
      return expect(async () => await sdk.blocklists.subscribeBlocklist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/6327232748/blocklists/6866034622/subscribe')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.blocklists.subscribeBlocklist({}, '6327232748', '6866034622'),
      ).rejects.toThrow();
    });
  });

  describe('test unsubscribeBlocklist', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/1844388083/blocklists/7438259942/unsubscribe?_subscription_type=voluptas')
        .reply(200, { data: {} });
      return sdk.blocklists
        .unsubscribeBlocklist({}, '1844388083', '7438259942', { _subscriptionType: 'voluptas' })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/9452038716/blocklists/3783840383/unsubscribe?_subscription_type=quae')
        .reply(200, { data: {} });
      return expect(async () => await sdk.blocklists.unsubscribeBlocklist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/2573910204/blocklists/1088999689/unsubscribe?_subscription_type=quia')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.blocklists.unsubscribeBlocklist({}, '2573910204', '1088999689', {
            _subscriptionType: 'quia',
          }),
      ).rejects.toThrow();
    });
  });

  describe('test getBlocklistSubscribers', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/2964909339/blocklists/9111221737/subscribers')
        .reply(200, { data: {} });
      return sdk.blocklists
        .getBlocklistSubscribers('2964909339', '9111221737')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/1522075711/blocklists/9591531590/subscribers')
        .reply(200, { data: {} });
      return expect(async () => await sdk.blocklists.getBlocklistSubscribers()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .get('/orgs/3473979390/blocklists/1718270404/subscribers')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.blocklists.getBlocklistSubscribers('3473979390', '1718270404'),
      ).rejects.toThrow();
    });
  });

  describe('test shareBlocklist', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/9957206751/blocklists/5739233691/shares')
        .reply(200, { data: {} });
      return sdk.blocklists
        .shareBlocklist({}, '9957206751', '5739233691')
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/8625811763/blocklists/3574475120/shares')
        .reply(200, { data: {} });
      return expect(async () => await sdk.blocklists.shareBlocklist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .post('/orgs/6593718512/blocklists/4142066088/shares')
        .reply(404, { data: {} });
      return expect(
        async () => await sdk.blocklists.shareBlocklist({}, '6593718512', '4142066088'),
      ).rejects.toThrow();
    });
  });

  describe('test unshareBlocklist', () => {
    test('test api call', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .delete('/orgs/9022131859/blocklists/4383276426/shares/5185632810?force=true')
        .reply(200, { data: {} });
      return sdk.blocklists
        .unshareBlocklist('9022131859', '4383276426', '5185632810', { force: true })
        .then((r: any) => expect(r.data).toEqual({ data: {} }));
    });

    test('test will throw error if required fields missing', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .delete('/orgs/4362716583/blocklists/9042014630/shares/5486337207?force=true')
        .reply(200, { data: {} });
      return expect(async () => await sdk.blocklists.unshareBlocklist()).rejects.toThrow();
    });

    test('test will throw error on a non-200 response', () => {
      const scope = nock('https://admin.api.crowdsec.net/v1/internal')
        .delete('/orgs/1579762141/blocklists/8005140873/shares/3680581542?force=true')
        .reply(404, { data: {} });
      return expect(
        async () =>
          await sdk.blocklists.unshareBlocklist('1579762141', '8005140873', '3680581542', {
            force: true,
          }),
      ).rejects.toThrow();
    });
  });
});
