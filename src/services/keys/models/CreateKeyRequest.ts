import { Scope } from './Scope';

export interface CreateKeyRequest {
  name: string;
  description?: string;
  expires_at?: string;
  /**
   * @minItems 1
   */
  scopes: [Scope, ...Scope[]];
}
