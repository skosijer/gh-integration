import { BlocklistsService } from './services/blocklists/Blocklists';
import { EnginesService } from './services/engines/Engines';
import { KeysService } from './services/keys/Keys';
import { QuotasService } from './services/quotas/Quotas';

export * from './models';

export * as BlocklistsModels from './services/blocklists';
export * as EnginesModels from './services/engines';
export * as KeysModels from './services/keys';
export * as QuotasModels from './services/quotas';

type Config = {
  accessToken?: string;
};

export * from './http/errors';

/**
 * This is the internal API to manage Crowdsec services
 */
export class Testsdk {
  public blocklists: BlocklistsService;
  public engines: EnginesService;
  public keys: KeysService;
  public quotas: QuotasService;

  constructor({ accessToken = '' }: Config) {
    this.blocklists = new BlocklistsService(accessToken);
    this.engines = new EnginesService(accessToken);
    this.keys = new KeysService(accessToken);
    this.quotas = new QuotasService(accessToken);
  }

  /**
   * Sets the baseUrl that the SDK will use for its requests.
   * @param {string} url
   */
  setBaseUrl(url: string): void {
    this.blocklists.setBaseUrl(url);
    this.engines.setBaseUrl(url);
    this.keys.setBaseUrl(url);
    this.quotas.setBaseUrl(url);
  }

  /**
   * Sets the access token used to authenticate.
   * @param {string} accessToken
   */
  setAccessToken(accessToken: string) {
    this.blocklists.setAccessToken(accessToken);
    this.engines.setAccessToken(accessToken);
    this.keys.setAccessToken(accessToken);
    this.quotas.setAccessToken(accessToken);
  }
}
