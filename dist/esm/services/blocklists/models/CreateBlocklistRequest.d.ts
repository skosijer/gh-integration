import { PricingTiers } from './PricingTiers';
import { BlocklistSources } from './BlocklistSources';
type PricingTier = PricingTiers;
type Source = BlocklistSources;
export interface CreateBlocklistRequest {
    /**
     * Blocklist name
     */
    name: string;
    /**
     * Blocklist label
     */
    label: string;
    /**
     * Blocklist description
     */
    description?: string;
    /**
     * Blocklist references
     */
    references?: string[];
    /**
     * Blocklist tags
     */
    tags?: string[];
    /**
     * CTI query (doc link available soon)
     */
    from_cti_query?: string;
    pricing_tier?: PricingTier;
    source?: Source;
    /**
     * Private blocklist
     */
    private_?: boolean;
}
export {};
//# sourceMappingURL=CreateBlocklistRequest.d.ts.map