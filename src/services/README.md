# Testsdk Services
A list of all services and services methods.
- Services

    - [Blocklists](#blocklists)

    - [Keys](#keys)

    - [Quotas](#quotas)

    - [Engines](#engines)
- [All Methods](#all-methods)


## Blocklists

| Method    | Description|
| :-------- | :----------|
| [createBlocklist](#createblocklist) | Create Blocklist By Org |
| [getBlocklists](#getblocklists) | Get Blocklists By Org |
| [getBlocklist](#getblocklist) | Get Blocklist By Org |
| [deleteBlocklist](#deleteblocklist) | Delete Blocklist By Org |
| [updateBlocklist](#updateblocklist) | Update Blocklist By Org |
| [uploadBlocklistContent](#uploadblocklistcontent) | Upload Blocklist Content By Org |
| [addIpsToBlocklist](#addipstoblocklist) | Add Ips To Blocklist By Org |
| [deleteIpsFromBlocklist](#deleteipsfromblocklist) | Delete Ips From Blocklist By Org |
| [downloadBlocklistContent](#downloadblocklistcontent) | Download Blocklist Content By Org |
| [subscribeBlocklist](#subscribeblocklist) | Subscribe Blocklist By Org |
| [unsubscribeBlocklist](#unsubscribeblocklist) | Unsubscribe Blocklist By Org |
| [getBlocklistSubscribers](#getblocklistsubscribers) | Get Blocklist Subscribers By Org |
| [shareBlocklist](#shareblocklist) | Share Blocklist By Org |
| [unshareBlocklist](#unshareblocklist) | Unshare Blocklist By Org |


## Keys

| Method    | Description|
| :-------- | :----------|
| [createKey](#createkey) | Create Key By Org |
| [getKeys](#getkeys) | Get Keys By Org |
| [deleteKey](#deletekey) | Delete Key By Org |
| [updateKey](#updatekey) | Update Key By Org |


## Quotas

| Method    | Description|
| :-------- | :----------|
| [createQuota](#createquota) | Create Quota |
| [deleteQuota](#deletequota) | Delete Quota |
| [updateQuota](#updatequota) | Update Quota |


## Engines

| Method    | Description|
| :-------- | :----------|
| [getEngines](#getengines) | Get Engines |
| [getEngine](#getengine) | Get Engine |




## All Methods


### **createBlocklist**
Create Blocklist By Org
- HTTP Method: POST
- Endpoint: /orgs/{organization_id}/blocklists

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| input | object | Request body. |



**Return Type**

BlocklistCreateResponse

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    description: 'description',
    from_cti_query: 'from_cti_query',
    label: 'label',
    name: 'name',
    pricing_tier: 'pricing_tier',
    private_: true,
    references: [],
    source: 'source',
    tags: [],
  };
  const result = await sdk.blocklists.createBlocklist(input, 'organization_id');
  console.log(result.data);
})();

```

### **getBlocklists**
Get Blocklists By Org
- HTTP Method: GET
- Endpoint: /orgs/{organization_id}/blocklists

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| page | number |  |
| pageSize | number |  |
| withPublic | boolean |  |
| withOwned | boolean |  |
| withShared | boolean |  |
| subscribedOnly | boolean |  |


**Return Type**

BlocklistsGetResponse

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.blocklists.getBlocklists('organization_id', {
    page: 1,
    pageSize: 100,
    withPublic: true,
    withOwned: true,
    withShared: true,
    subscribedOnly: true,
  });
  console.log(result.data);
})();

```

### **getBlocklist**
Get Blocklist By Org
- HTTP Method: GET
- Endpoint: /orgs/{organization_id}/blocklists/{blocklist_id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| blocklistId | string |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| withShared | boolean |  |
| withPublic | boolean |  |


**Return Type**

BlocklistGetResponse

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.blocklists.getBlocklist('organization_id', '65c4b9e027e1274b15fcdcc5', {
    withShared: true,
    withPublic: true,
  });
  console.log(result.data);
})();

```

### **deleteBlocklist**
Delete Blocklist By Org
- HTTP Method: DELETE
- Endpoint: /orgs/{organization_id}/blocklists/{blocklist_id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| blocklistId | string |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| force | boolean | Force delete the blocklist |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.blocklists.deleteBlocklist(
    'organization_id',
    '65c4b9e027e1274b15fcdcc7',
    { force: true },
  );
  console.log(result.data);
})();

```

### **updateBlocklist**
Update Blocklist By Org
- HTTP Method: PUT
- Endpoint: /orgs/{organization_id}/blocklists/{blocklist_id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| blocklistId | string |  |
| input | object | Request body. |



**Return Type**

BlocklistBase

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    description: 'description',
    from_cti_query: 'from_cti_query',
    label: 'label',
    name: 'name',
    pricing_tier: 'pricing_tier',
    private_: true,
    references: ['dolore', 'veniam labore nostrud'],
    source: 'source',
    tags: ['velit eiusmod magna laborum mollit', 'tempor pariatur irure'],
  };
  const result = await sdk.blocklists.updateBlocklist(
    input,
    'organization_id',
    '65c4b9e027e1274b15fcdcc6',
  );
  console.log(result.data);
})();

```

### **uploadBlocklistContent**
Upload Blocklist Content By Org
- HTTP Method: POST
- Endpoint: /orgs/{organization_id}/blocklists/{blocklist_id}/upload

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| blocklistId | string |  |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| expiration | string |  |
| ignoreInvalidIps | boolean |  |
| overwrite | boolean |  |


**Return Type**

UploadBlocklistContentResponse

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const input = {};
  const result = await sdk.blocklists.uploadBlocklistContent(
    input,
    'organization_id',
    '65c4b9e027e1274b15fcdcc8',
    { expiration: '1899-06-14T02:34:29.0Z', ignoreInvalidIps: true, overwrite: true },
  );
  console.log(result.data);
})();

```

### **addIpsToBlocklist**
Add Ips To Blocklist By Org
- HTTP Method: POST
- Endpoint: /orgs/{organization_id}/blocklists/{blocklist_id}/ips

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| blocklistId | string |  |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| overwrite | boolean |  |


**Return Type**

AddIpsToBlocklistResponse

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    expiration: '1890-04-27T16:45:08.0Z',
    ips: ['ipsum incididunt Excepteur ea', 'cupidatat fugiat veniam cillum dolor'],
  };
  const result = await sdk.blocklists.addIpsToBlocklist(
    input,
    'organization_id',
    '65c4b9e027e1274b15fcdcc9',
    { overwrite: true },
  );
  console.log(result.data);
})();

```

### **deleteIpsFromBlocklist**
Delete Ips From Blocklist By Org
- HTTP Method: POST
- Endpoint: /orgs/{organization_id}/blocklists/{blocklist_id}/ips/delete

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| blocklistId | string |  |
| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const input = { ips: ['cillum aliquip ut', 'laboris aliquip reprehenderit nostrud'] };
  const result = await sdk.blocklists.deleteIpsFromBlocklist(
    input,
    'organization_id',
    '65c4b9e027e1274b15fcdcca',
  );
  console.log(result.data);
})();

```

### **downloadBlocklistContent**
Download Blocklist Content By Org
- HTTP Method: GET
- Endpoint: /orgs/{organization_id}/blocklists/{blocklist_id}/download

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| blocklistId | string |  |
| input | object | Request body. |



**Return Type**

DownloadBlocklistContentResponse

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.blocklists.downloadBlocklistContent(
    'organization_id',
    '65c4b9e027e1274b15fcdccb',
  );
  console.log(result.data);
})();

```

### **subscribeBlocklist**
Subscribe Blocklist By Org
- HTTP Method: POST
- Endpoint: /orgs/{organization_id}/blocklists/{blocklist_id}/subscribe

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| blocklistId | string |  |
| input | object | Request body. |



**Return Type**

SubscribeBlocklistResponse

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    ids: ['nostrud est dolor eiusmod Lorem', 'pariatur incididunt laboris'],
    origin: 'origin',
    remediation: 'remediation',
    type_: 'type',
  };
  const result = await sdk.blocklists.subscribeBlocklist(
    input,
    'organization_id',
    '65c4b9e027e1274b15fcdccc',
  );
  console.log(result.data);
})();

```

### **unsubscribeBlocklist**
Unsubscribe Blocklist By Org
- HTTP Method: POST
- Endpoint: /orgs/{organization_id}/blocklists/{blocklist_id}/unsubscribe

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| blocklistId | string |  |
| input | object | Request body. |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| _subscriptionType | [SubscriptionType](/src/models/README.md#subscriptiontype) |  |


**Return Type**

UnsubscribeBlocklistResponse

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const input = { ids: ['dolore aute ullamco voluptate Excepteur', 'mollit'], type_: 'type' };
  const result = await sdk.blocklists.unsubscribeBlocklist(
    input,
    'organization_id',
    '65c4b9e027e1274b15fcdccd',
    { subscriptionType: 'SECOPS' },
  );
  console.log(result.data);
})();

```

### **getBlocklistSubscribers**
Get Blocklist Subscribers By Org
- HTTP Method: GET
- Endpoint: /orgs/{organization_id}/blocklists/{blocklist_id}/subscribers

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| blocklistId | string |  |



**Return Type**

BlocklistSubscribersResponse

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.blocklists.getBlocklistSubscribers(
    'organization_id',
    '65c4b9e027e1274b15fcdcce',
  );
  console.log(result.data);
})();

```

### **shareBlocklist**
Share Blocklist By Org
- HTTP Method: POST
- Endpoint: /orgs/{organization_id}/blocklists/{blocklist_id}/shares

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| blocklistId | string |  |
| input | object | Request body. |



**Return Type**

ShareBlocklistResponse

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const input = { organizations: [] };
  const result = await sdk.blocklists.shareBlocklist(
    input,
    'organization_id',
    '65c4b9e027e1274b15fcdccf',
  );
  console.log(result.data);
})();

```

### **unshareBlocklist**
Unshare Blocklist By Org
- HTTP Method: DELETE
- Endpoint: /orgs/{organization_id}/blocklists/{blocklist_id}/shares/{unshare_organization_id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| blocklistId | string |  |
| unshareOrganizationId | string |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| force | boolean | Force delete the blocklist |


**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.blocklists.unshareBlocklist(
    'organization_id',
    '65c4b9e027e1274b15fcdcd0',
    'unshare_organization_id',
    { force: true },
  );
  console.log(result.data);
})();

```


### **createKey**
Create Key By Org
- HTTP Method: POST
- Endpoint: /orgs/{organization_id}/keys

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| input | object | Request body. |



**Return Type**

KeyCreateResponse

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    description: 'Key description',
    expires_at: '2024-03-09T11:24:15.0Z',
    name: 'Key name',
    scopes: [{ access: ['read', 'write'], service: 'blocklists' }],
  };
  const result = await sdk.keys.createKey(input, 'organization_id');
  console.log(result.data);
})();

```

### **getKeys**
Get Keys By Org
- HTTP Method: GET
- Endpoint: /orgs/{organization_id}/keys

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |



**Return Type**

KeysReadResponse

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.keys.getKeys('organization_id');
  console.log(result.data);
})();

```

### **deleteKey**
Delete Key By Org
- HTTP Method: DELETE
- Endpoint: /orgs/{organization_id}/keys/{keyId}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| keyId | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.keys.deleteKey('organization_id', '65c4b9e027e1274b15fcdcd1');
  console.log(result.data);
})();

```

### **updateKey**
Update Key By Org
- HTTP Method: PUT
- Endpoint: /orgs/{organization_id}/keys/{keyId}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| keyId | string |  |
| input | object | Request body. |



**Return Type**

UpdateKeyResponse

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    description: 'Key description',
    disabled_by_user: false,
    expires_at: '2024-03-09T11:24:15.0Z',
    name: 'Key name',
  };
  const result = await sdk.keys.updateKey(input, 'organization_id', '65c4b9e027e1274b15fcdcd2');
  console.log(result.data);
})();

```


### **createQuota**
Create Quota
- HTTP Method: POST
- Endpoint: /orgs/{organization_id}/quotas

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| input | object | Request body. |



**Return Type**

CreateQuotaResponse

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    blocklists_create: 60145099.62209986,
    blocklists_subscriptions: 'nulla sunt',
    keys_create: 'ullamco quis pariatur minim irure',
  };
  const result = await sdk.quotas.createQuota(input, 'organization_id');
  console.log(result.data);
})();

```

### **deleteQuota**
Delete Quota
- HTTP Method: DELETE
- Endpoint: /orgs/{organization_id}/quotas

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.quotas.deleteQuota('organization_id');
  console.log(result.data);
})();

```

### **updateQuota**
Update Quota
- HTTP Method: PUT
- Endpoint: /orgs/{organization_id}/quotas

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| input | object | Request body. |



**Return Type**

UpdateQuotaResponse

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const input = {
    blocklists_create: 'ipsum',
    blocklists_subscriptions: -57886787.81255326,
    keys_create: 90121973.34143469,
  };
  const result = await sdk.quotas.updateQuota(input, 'organization_id');
  console.log(result.data);
})();

```


### **getEngines**
Get Engines
- HTTP Method: GET
- Endpoint: /orgs/{organization_id}/engines

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| page | number | Page number |
| size | number | Page size |


**Return Type**

PageEngine_

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.engines.getEngines('organization_id', { page: 1, size: 50 });
  console.log(result.data);
})();

```

### **getEngine**
Get Engine
- HTTP Method: GET
- Endpoint: /orgs/{organization_id}/engines/{engine_id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| organizationId | string |  |
| engineId | string |  |



**Return Type**

Engine

**Example Usage Code Snippet**
```Typescript
import { Testsdk } from 'testsdk';

const sdk = new Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });

(async () => {
  const result = await sdk.engines.getEngine('organization_id', 'engine_id');
  console.log(result.data);
})();

```




