import { EntityType } from '../../common/EntityType';

type Type_ = EntityType;

export interface BlocklistSubscriberEntity {
  /**
   * Subscriber entity id
   */
  id: string;
  /**
   * Remediation
   */
  remediation: string;
  type_: Type_;
}
