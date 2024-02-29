import { EntityType } from '../../common/EntityType';
import { BlocklistSubscription } from './BlocklistSubscription';
type Type_ = EntityType;
export interface Engine {
    organization_id: string;
    created_at?: string;
    id: string;
    blocklists?: BlocklistSubscription[];
    tags?: string[];
    enrolled_at?: string;
    type_?: Type_;
}
export {};
//# sourceMappingURL=Engine.d.ts.map