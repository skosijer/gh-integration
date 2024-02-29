import { Scope } from './Scope';

export interface KeyRead {
  id: string;
  name: string;
  description?: string;
  created_at?: string;
  expires_at?: string;
  disabled_by_user: boolean;
  /**
   * @minItems 1
   */
  scopes: [Scope, ...Scope[]];
}
