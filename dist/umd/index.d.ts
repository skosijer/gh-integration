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
export declare class Testsdk {
    blocklists: BlocklistsService;
    engines: EnginesService;
    keys: KeysService;
    quotas: QuotasService;
    constructor({ accessToken }: Config);
    /**
     * Sets the baseUrl that the SDK will use for its requests.
     * @param {string} url
     */
    setBaseUrl(url: string): void;
    /**
     * Sets the access token used to authenticate.
     * @param {string} accessToken
     */
    setAccessToken(accessToken: string): void;
}
//# sourceMappingURL=index.d.ts.map