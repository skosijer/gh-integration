import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  try {
    const result = await sdk.build
      .getBuildStatuses();
    console.log(result);
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
})();
 

