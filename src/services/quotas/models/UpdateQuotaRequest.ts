type BlocklistsCreate = number | string;
type BlocklistsSubscriptions = number | string;
type KeysCreate = number | string;

export interface UpdateQuotaRequest {
  blocklists_create?: BlocklistsCreate;
  blocklists_subscriptions?: BlocklistsSubscriptions;
  keys_create?: KeysCreate;
}
