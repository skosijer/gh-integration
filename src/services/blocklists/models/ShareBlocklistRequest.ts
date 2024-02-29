import { Share } from './Share';

export interface ShareBlocklistRequest {
  /**
   * List of organizations to share the blocklist
   */
  organizations: Share[];
}
