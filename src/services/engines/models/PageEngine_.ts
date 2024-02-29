import { Engine } from './Engine';

export interface PageEngine_ {
  items: Engine[];
  total: number;
  page: number;
  size: number;
  pages?: number;
}
