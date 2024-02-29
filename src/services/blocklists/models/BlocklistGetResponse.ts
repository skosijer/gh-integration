import { PricingTiers } from './PricingTiers';
import { BlocklistSources } from './BlocklistSources';
import { BlocklistStats } from './BlocklistStats';
import { Share } from './Share';
import { BlocklistSubscriberEntity } from './BlocklistSubscriberEntity';

type PricingTier = PricingTiers;
type Source = BlocklistSources;
type Stats = BlocklistStats;

export interface BlocklistGetResponse {
  id: string;
  created_at: string;
  updated_at?: string;
  name: string;
  label: string;
  description?: string;
  references?: string[];
  tags?: string[];
  pricing_tier: PricingTier;
  source: Source;
  stats?: Stats;
  from_cti_query?: string;
  shared_with?: Share[];
  organization_id: string;
  subscribers?: BlocklistSubscriberEntity[];
  private_: boolean;
}
