import { Permission } from './Permission';

export interface Share {
  organization_id: string;
  permission: Permission;
}
