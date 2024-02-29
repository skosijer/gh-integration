import { BlocklistBase } from './BlocklistBase';
import { Links } from './Links';
export interface BlocklistsGetResponse {
    /**
     * List of blocklists
     */
    lists: BlocklistBase[];
    /**
     * Page number
     */
    page: number;
    /**
     * Page size
     */
    page_size: number;
    /**
     * Total number of blocklists
     */
    total: number;
    links: Links;
}
//# sourceMappingURL=BlocklistsGetResponse.d.ts.map