import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  try {
    const result = await sdk.blocklists.getBlocklists('organization_id');
    console.log('sss');
    console.log(JSON.stringify(result.data, null, 2));
  } catch (err) {
    const error = err as Error;
    console.error(JSON.stringify(error.message));
  }
})();
