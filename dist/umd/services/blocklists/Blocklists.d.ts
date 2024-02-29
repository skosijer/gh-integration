import BaseService from '../../BaseService';
import Response from '../../http/Response';
import { BlocklistsGetResponse } from './models/BlocklistsGetResponse';
import { BlocklistCreateResponse } from './models/BlocklistCreateResponse';
import { CreateBlocklistRequest } from './models/CreateBlocklistRequest';
import { BlocklistGetResponse } from './models/BlocklistGetResponse';
import { BlocklistBase } from './models/BlocklistBase';
import { UpdateBlocklistRequest } from './models/UpdateBlocklistRequest';
import { UploadBlocklistContentResponse } from './models/UploadBlocklistContentResponse';
import { UploadBlocklistContentRequest } from './models/UploadBlocklistContentRequest';
import { AddIpsToBlocklistResponse } from './models/AddIpsToBlocklistResponse';
import { AddIpsToBlocklistRequest } from './models/AddIpsToBlocklistRequest';
import { DeleteIpsFromBlocklistRequest } from './models/DeleteIpsFromBlocklistRequest';
import { DownloadBlocklistContentResponse } from './models/DownloadBlocklistContentResponse';
import { BodyDownloadBlocklistContent } from './models/BodyDownloadBlocklistContent';
import { SubscribeBlocklistResponse } from './models/SubscribeBlocklistResponse';
import { SubscribeBlocklistRequest } from './models/SubscribeBlocklistRequest';
import { SubscriptionType } from './models/SubscriptionType';
import { UnsubscribeBlocklistResponse } from './models/UnsubscribeBlocklistResponse';
import { UnsubscribeBlocklistRequest } from './models/UnsubscribeBlocklistRequest';
import { BlocklistSubscribersResponse } from './models/BlocklistSubscribersResponse';
import { ShareBlocklistResponse } from './models/ShareBlocklistResponse';
import { ShareBlocklistRequest } from './models/ShareBlocklistRequest';
export declare class BlocklistsService extends BaseService {
    /**
     * @summary Get Blocklists By Org
     * @description Get blocklists
  
     * @param organizationId Needed input variable
     * @param optionalParams - Optional parameters
     * @param optionalParams.page - Needed input variable
     * @param optionalParams.pageSize - Needed input variable
     * @param optionalParams.withPublic - Needed input variable
     * @param optionalParams.withOwned - Needed input variable
     * @param optionalParams.withShared - Needed input variable
     * @param optionalParams.subscribedOnly - Needed input variable
     * @returns {Promise<Response<BlocklistsGetResponse>>} - The promise with the result
     */
    getBlocklists(organizationId: string, optionalParams?: {
        page?: number;
        pageSize?: number;
        withPublic?: boolean;
        withOwned?: boolean;
        withShared?: boolean;
        subscribedOnly?: boolean;
    }): Promise<Response<BlocklistsGetResponse>>;
    /**
     * @summary Create Blocklist By Org
     * @description Create a new blocklist
  
     * @param organizationId Needed input variable
     * @returns {Promise<Response<BlocklistCreateResponse>>} - The promise with the result
     */
    createBlocklist(input: CreateBlocklistRequest, organizationId: string): Promise<Response<BlocklistCreateResponse>>;
    /**
     * @summary Get Blocklist By Org
     * @description Get blocklist by ID
  
     * @param organizationId Needed input variable
     * @param blocklistId Needed input variable
     * @param optionalParams - Optional parameters
     * @param optionalParams.withShared - Needed input variable
     * @param optionalParams.withPublic - Needed input variable
     * @returns {Promise<Response<BlocklistGetResponse>>} - The promise with the result
     */
    getBlocklist(organizationId: string, blocklistId: string, optionalParams?: {
        withShared?: boolean;
        withPublic?: boolean;
    }): Promise<Response<BlocklistGetResponse>>;
    /**
     * @summary Update Blocklist By Org
     * @description Update blocklist by ID
  
     * @param organizationId Needed input variable
     * @param blocklistId Needed input variable
     * @returns {Promise<Response<BlocklistBase>>} - The promise with the result
     */
    updateBlocklist(input: UpdateBlocklistRequest, organizationId: string, blocklistId: string): Promise<Response<BlocklistBase>>;
    /**
     * @summary Delete Blocklist By Org
     * @description Delete blocklist by ID
  
     * @param organizationId Needed input variable
     * @param blocklistId Needed input variable
     * @param optionalParams - Optional parameters
     * @param optionalParams.force - Force delete the blocklist
     * @returns {Promise<any>} - The promise with the result
     */
    deleteBlocklist(organizationId: string, blocklistId: string, optionalParams?: {
        force?: boolean;
    }): Promise<any>;
    /**
     * @summary Upload Blocklist Content By Org
     * @description Upload blocklist content by uploading a file
  
     * @param organizationId Needed input variable
     * @param blocklistId Needed input variable
     * @param optionalParams - Optional parameters
     * @param optionalParams.expiration - Needed input variable
     * @param optionalParams.ignoreInvalidIps - Needed input variable
     * @param optionalParams.overwrite - Needed input variable
     * @returns {Promise<Response<UploadBlocklistContentResponse>>} - The promise with the result
     */
    uploadBlocklistContent(input: UploadBlocklistContentRequest, organizationId: string, blocklistId: string, optionalParams?: {
        expiration?: string;
        ignoreInvalidIps?: boolean;
        overwrite?: boolean;
    }): Promise<Response<UploadBlocklistContentResponse>>;
    /**
     * @summary Add Ips To Blocklist By Org
     * @description Add IPs to blocklist
  
     * @param organizationId Needed input variable
     * @param blocklistId Needed input variable
     * @param optionalParams - Optional parameters
     * @param optionalParams.overwrite - Needed input variable
     * @returns {Promise<Response<AddIpsToBlocklistResponse>>} - The promise with the result
     */
    addIpsToBlocklist(input: AddIpsToBlocklistRequest, organizationId: string, blocklistId: string, optionalParams?: {
        overwrite?: boolean;
    }): Promise<Response<AddIpsToBlocklistResponse>>;
    /**
     * @summary Delete Ips From Blocklist By Org
     * @description Delete IPs from blocklist
  
     * @param organizationId Needed input variable
     * @param blocklistId Needed input variable
     * @returns {Promise<any>} - The promise with the result
     */
    deleteIpsFromBlocklist(input: DeleteIpsFromBlocklistRequest, organizationId: string, blocklistId: string): Promise<any>;
    /**
     * @summary Download Blocklist Content By Org
     * @description Download blocklist content
  
     * @param organizationId Needed input variable
     * @param blocklistId Needed input variable
     * @returns {Promise<Response<DownloadBlocklistContentResponse>>} - The promise with the result
     */
    downloadBlocklistContent(input: BodyDownloadBlocklistContent, organizationId: string, blocklistId: string): Promise<Response<DownloadBlocklistContentResponse>>;
    /**
     * @summary Subscribe Blocklist By Org
     * @description Subscribe to blocklist
  
     * @param organizationId Needed input variable
     * @param blocklistId Needed input variable
     * @returns {Promise<Response<SubscribeBlocklistResponse>>} - The promise with the result
     */
    subscribeBlocklist(input: SubscribeBlocklistRequest, organizationId: string, blocklistId: string): Promise<Response<SubscribeBlocklistResponse>>;
    /**
     * @summary Unsubscribe Blocklist By Org
     * @description Unsubscribe from blocklist
  
     * @param organizationId Needed input variable
     * @param blocklistId Needed input variable
     * @param optionalParams - Optional parameters
     * @param optionalParams._subscriptionType - Needed input variable
     * @returns {Promise<Response<UnsubscribeBlocklistResponse>>} - The promise with the result
     */
    unsubscribeBlocklist(input: UnsubscribeBlocklistRequest, organizationId: string, blocklistId: string, optionalParams?: {
        _subscriptionType?: SubscriptionType;
    }): Promise<Response<UnsubscribeBlocklistResponse>>;
    /**
     * @summary Get Blocklist Subscribers By Org
     * @description Get blocklist subscribers
  
     * @param organizationId Needed input variable
     * @param blocklistId Needed input variable
     * @returns {Promise<Response<BlocklistSubscribersResponse>>} - The promise with the result
     */
    getBlocklistSubscribers(organizationId: string, blocklistId: string): Promise<Response<BlocklistSubscribersResponse>>;
    /**
     * @summary Share Blocklist By Org
     * @description Share blocklist with organizations
  
     * @param organizationId Needed input variable
     * @param blocklistId Needed input variable
     * @returns {Promise<Response<ShareBlocklistResponse>>} - The promise with the result
     */
    shareBlocklist(input: ShareBlocklistRequest, organizationId: string, blocklistId: string): Promise<Response<ShareBlocklistResponse>>;
    /**
     * @summary Unshare Blocklist By Org
     * @description Unshare blocklist with organizations
  
     * @param organizationId Needed input variable
     * @param blocklistId Needed input variable
     * @param unshareOrganizationId Needed input variable
     * @param optionalParams - Optional parameters
     * @param optionalParams.force - Force delete the blocklist
     * @returns {Promise<any>} - The promise with the result
     */
    unshareBlocklist(organizationId: string, blocklistId: string, unshareOrganizationId: string, optionalParams?: {
        force?: boolean;
    }): Promise<any>;
}
//# sourceMappingURL=Blocklists.d.ts.map