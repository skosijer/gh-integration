import { BlocklistContentStats } from './BlocklistContentStats';
import { BlocklistUsageStats } from './BlocklistUsageStats';

type ContentStats = BlocklistContentStats;
type UsageStats = BlocklistUsageStats;

export interface BlocklistStats {
  content_stats: ContentStats;
  usage_stats: UsageStats;
  addition_2days: number;
  addition_month: number;
  suppression_2days: number;
  suppression_month: number;
  change_2days_percentage: number;
  change_month_percentage: number;
  count: number;
  updated_at?: string;
}
