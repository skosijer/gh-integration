import { EntityType } from '../../common/EntityType';
type Type_ = EntityType;
export interface SubscribeBlocklistRequest {
    /**
     * List of subscriber entity id
     */
    ids?: string[];
    /**
     * Remediation
     */
    remediation: string;
    /**
     * Origin of the subscription (email user)
     */
    origin: string;
    type_: Type_;
}
export {};
//# sourceMappingURL=SubscribeBlocklistRequest.d.ts.map