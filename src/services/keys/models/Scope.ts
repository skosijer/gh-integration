import { Service } from './Service';
import { Access } from './Access';

export interface Scope {
  service: Service;
  access: Access[];
}
