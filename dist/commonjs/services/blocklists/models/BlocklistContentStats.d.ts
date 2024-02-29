import { CtiCategory } from './CtiCategory';
import { CtiScenario } from './CtiScenario';
import { CtiAs } from './CtiAs';
import { CtiCountry } from './CtiCountry';
import { CtiIp } from './CtiIp';
export interface BlocklistContentStats {
    total_seen: number;
    total_fire: number;
    total_seen_1m: number;
    total_in_other_lists: number;
    total_false_positive: number;
    most_present_categories: CtiCategory[];
    most_present_scenarios: CtiScenario[];
    top_as: CtiAs[];
    top_attacking_countries: CtiCountry[];
    top_ips: CtiIp[];
    updated_at?: string;
}
//# sourceMappingURL=BlocklistContentStats.d.ts.map