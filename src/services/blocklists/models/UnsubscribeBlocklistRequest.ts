import { EntityType } from '../../common/EntityType';

type Type_ = EntityType;

export interface UnsubscribeBlocklistRequest {
  /**
   * List of subscriber entity id
   */
  ids?: string[];
  type_: Type_;
}
