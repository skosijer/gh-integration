import { Scope } from './Scope';

export interface KeyCreateResponse {
  id: string;
  name: string;
  key: string;
  description?: string;
  created_at: string;
  expires_at?: string;
  disabled_by_user: boolean;
  /**
   * @minItems 1
   */
  scopes: [Scope, ...Scope[]];
}
