export interface AddIpsToBlocklistRequest {
  /**
   * List of IPs or networks
   */
  ips: string[];
  /**
   * Expiration date
   */
  expiration?: string;
}
