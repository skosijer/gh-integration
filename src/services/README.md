# Liblab Services
A list of all services and services methods.
- Services

    - [Build](#build)

    - [Api](#api)

    - [Org](#org)

    - [OrgMember](#orgmember)

    - [Artifact](#artifact)

    - [Sdk](#sdk)

    - [Doc](#doc)

    - [HubSpot](#hubspot)

    - [Subscription](#subscription)

    - [PaymentProvider](#paymentprovider)

    - [User](#user)

    - [Token](#token)

    - [Invitation](#invitation)

    - [Auth0](#auth0)

    - [Plan](#plan)

    - [Spec](#spec)

    - [HealthCheck](#healthcheck)

    - [Event](#event)

    - [Tags](#tags)

    - [Ai](#ai)

    - [Feedback](#feedback)

    - [UserEvent](#userevent)
- [All Methods](#all-methods)


## Build

| Method    | Description|
| :-------- | :----------|
| [createBuild](#createbuild) |  |
| [getBuilds](#getbuilds) |  |
| [getBuildStatuses](#getbuildstatuses) |  |
| [getById](#getbyid) |  |
| [tag](#tag) |  |
| [untag](#untag) |  |
| [approveBuild](#approvebuild) |  |
| [unApproveBuild](#unapprovebuild) |  |


## Api

| Method    | Description|
| :-------- | :----------|
| [getApiBuilds](#getapibuilds) |  |
| [getApiBuildTags](#getapibuildtags) |  |
| [getApiSdks](#getapisdks) |  |
| [getApiDocs](#getapidocs) |  |
| [createApi](#createapi) |  |
| [getApis](#getapis) |  |
| [searchApis](#searchapis) |  |
| [getApiById](#getapibyid) |  |
| [updateApi](#updateapi) |  |
| [removeApi](#removeapi) |  |
| [getApiMembers](#getapimembers) |  |
| [getApiByOrgSlugAndApiSlug](#getapibyorgslugandapislug) |  |


## Org

| Method    | Description|
| :-------- | :----------|
| [createOrg](#createorg) |  |
| [getOrgs](#getorgs) |  |
| [searchOrgs](#searchorgs) |  |
| [getOrgById](#getorgbyid) |  |
| [updateOrg](#updateorg) |  |
| [removeOrg](#removeorg) |  |
| [getApisByOrg](#getapisbyorg) |  |
| [getOrgJobs](#getorgjobs) |  |
| [getDocsByOrg](#getdocsbyorg) |  |
| [getBuildByOrg](#getbuildbyorg) |  |
| [getOrgApiBuilds](#getorgapibuilds) |  |
| [getOrgArtifacts](#getorgartifacts) |  |


## OrgMember

| Method    | Description|
| :-------- | :----------|
| [createMember](#createmember) |  |
| [getByOrgId](#getbyorgid) |  |
| [updateMember](#updatemember) |  |
| [removeMember](#removemember) |  |
| [leaveOrg](#leaveorg) |  |
| [enableAllMembers](#enableallmembers) |  |
| [disableAllMembers](#disableallmembers) |  |


## Artifact

| Method    | Description|
| :-------- | :----------|
| [createArtifact](#createartifact) |  |
| [getArtifacts](#getartifacts) |  |
| [getArtifactStatuses](#getartifactstatuses) |  |
| [getArtifactById](#getartifactbyid) |  |
| [removeArtifact](#removeartifact) |  |


## Sdk

| Method    | Description|
| :-------- | :----------|
| [createSdk](#createsdk) |  |
| [findSdks](#findsdks) |  |
| [getSdkById](#getsdkbyid) |  |
| [removeSdk](#removesdk) |  |


## Doc

| Method    | Description|
| :-------- | :----------|
| [getApprovedByOrgSlugAndApiSlug](#getapprovedbyorgslugandapislug) |  |
| [getAllApprovedByOrgSlugAndApiSlug](#getallapprovedbyorgslugandapislug) |  |
| [createDoc](#createdoc) |  |
| [findDocs](#finddocs) |  |
| [approve](#approve) |  |
| [unapprove](#unapprove) |  |
| [getDocById](#getdocbyid) |  |
| [removeDoc](#removedoc) |  |
| [updateDoc](#updatedoc) |  |
| [getDownloadUrl](#getdownloadurl) |  |


## HubSpot

| Method    | Description|
| :-------- | :----------|
| [sendShadowForm](#sendshadowform) |  |


## Subscription

| Method    | Description|
| :-------- | :----------|
| [getActiveSubscription](#getactivesubscription) |  |
| [getCheckoutLink](#getcheckoutlink) |  |


## PaymentProvider

| Method    | Description|
| :-------- | :----------|
| [stripeWebhook](#stripewebhook) |  |


## User

| Method    | Description|
| :-------- | :----------|
| [getCurrentUser](#getcurrentuser) |  |
| [createUser](#createuser) |  |
| [getUsers](#getusers) |  |
| [getUserById](#getuserbyid) |  |
| [updateUser](#updateuser) |  |
| [removeUser](#removeuser) |  |
| [updateEmailSubscription](#updateemailsubscription) |  |
| [getUserOrgs](#getuserorgs) |  |
| [getUserApis](#getuserapis) |  |


## Token

| Method    | Description|
| :-------- | :----------|
| [createToken](#createtoken) |  |
| [findTokensByUserId](#findtokensbyuserid) |  |
| [getTokenById](#gettokenbyid) |  |
| [removeToken](#removetoken) |  |


## Invitation

| Method    | Description|
| :-------- | :----------|
| [createOrgInvite](#createorginvite) |  |
| [redeemInvite](#redeeminvite) |  |
| [declineInvite](#declineinvite) |  |
| [getReceivedInvites](#getreceivedinvites) |  |
| [getSentInvites](#getsentinvites) |  |
| [searchInvites](#searchinvites) |  |
| [getInviteByCode](#getinvitebycode) |  |


## Auth0

| Method    | Description|
| :-------- | :----------|
| [resetPasswordAuth0](#resetpasswordauth0) |  |


## Plan

| Method    | Description|
| :-------- | :----------|
| [getEnabledPlans](#getenabledplans) |  |


## Spec

| Method    | Description|
| :-------- | :----------|
| [validateSpec](#validatespec) |  |


## HealthCheck

| Method    | Description|
| :-------- | :----------|
| [healthCheckControllerCheck](#healthcheckcontrollercheck) |  |


## Event

| Method    | Description|
| :-------- | :----------|
| [track](#track) |  |


## Tags

| Method    | Description|
| :-------- | :----------|
| [create](#create) |  |
| [search](#search) |  |


## Ai

| Method    | Description|
| :-------- | :----------|
| [askAboutSpec](#askaboutspec) |  |


## Feedback

| Method    | Description|
| :-------- | :----------|
| [sendFeedback](#sendfeedback) |  |


## UserEvent

| Method    | Description|
| :-------- | :----------|
| [getUserEvents](#getuserevents) |  |
| [exportUserEventsToCsv](#exportusereventstocsv) |  |
| [trackUserPublishPrEvent](#trackuserpublishprevent) |  |




## All Methods


### **createBuild**

- HTTP Method: POST
- Endpoint: /builds

**Required Parameters**

| input | object | Request body. |



**Return Type**

BuildResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {};
  const result = await sdk.build
    .createBuild(input);
  console.log(result);
})();

```

### **getBuilds**

- HTTP Method: GET
- Endpoint: /builds

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| offset | number |  |
| limit | number |  |
| orgId | number |  |
| apiSlug | string |  |



**Return Type**

PaginatedBuildResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.build
    .getBuilds(70559553.01743624, -33373966.95449783, -5716084.647510916, 'apiSlug');
  console.log(result);
})();

```

### **getBuildStatuses**

- HTTP Method: GET
- Endpoint: /builds/statuses




**Return Type**

GetBuildStatusesResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.build
    .getBuildStatuses();
  console.log(result);
})();

```

### **getById**

- HTTP Method: GET
- Endpoint: /builds/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

GetBuildByIdResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.build
    .getById(-71181941.89298105);
  console.log(result);
})();

```

### **tag**

- HTTP Method: POST
- Endpoint: /builds/{buildId}/tag/{tagId}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| buildId | number |  |
| tagId | number |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.build
    .tag(-93355838.50737028, -78938121.47971019);
  console.log(result);
})();

```

### **untag**

- HTTP Method: POST
- Endpoint: /builds/{buildId}/untag/{tagId}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| buildId | number |  |
| tagId | number |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.build
    .untag(-59691974.34149334, 11295286.481808156);
  console.log(result);
})();

```

### **approveBuild**

- HTTP Method: PATCH
- Endpoint: /builds/{buildId}/approve

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| buildId | number |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.build
    .approveBuild(37057020.00428626);
  console.log(result);
})();

```

### **unApproveBuild**

- HTTP Method: PATCH
- Endpoint: /builds/{buildId}/unapprove

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| buildId | number |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.build
    .unApproveBuild(91194935.66730109);
  console.log(result);
})();

```


### **getApiBuilds**

- HTTP Method: GET
- Endpoint: /apis/{id}/builds

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |
| offset | number |  |
| limit | number |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sortBy | [SortBy](/src/models/README.md#sortby) |  |
| direction | [Direction](/src/models/README.md#direction) |  |
| statuses | string[] |  |
| tags | number[] |  |
| createdByIds | number[] |  |


**Return Type**

PaginatedBuildResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.api
    .getApiBuilds(11046882.529586717, 9007619.425651863, -89685428.26979788, { sortBy: 'status', direction: 'asc', statuses: ["IN_PROGRESS","SUCCESS"], tags: [12792442.444489315,16108093.732849449], createdByIds: [-92832994.51934575,-83617770.74390751] });
  console.log(result);
})();

```

### **getApiBuildTags**

- HTTP Method: GET
- Endpoint: /apis/{id}/builds/tags

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

GetApiBuildTagsResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.api
    .getApiBuildTags(-16105545.431905448);
  console.log(result);
})();

```

### **getApiSdks**

- HTTP Method: GET
- Endpoint: /apis/{id}/sdks

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |
| offset | number |  |
| limit | number |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| statuses | string[] |  |
| tags | number[] |  |
| createdByIds | number[] |  |
| languages | string[] |  |
| sortBy | [ApiSortBy](/src/models/README.md#apisortby) |  |
| direction | [Direction](/src/models/README.md#direction) |  |


**Return Type**

PaginatedSdkResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.api
    .getApiSdks(-83665456.30193648, 89328993.6580528, -27208143.84074281, { statuses: ["SUCCESS","FAIL"], tags: [47077356.29092646,87220173.10644189], createdByIds: [-33997976.550874844,-13185000.158322915], languages: ["JAVA","PYTHON"], sortBy: 'createdAt', direction: 'asc' });
  console.log(result);
})();

```

### **getApiDocs**

- HTTP Method: GET
- Endpoint: /apis/{id}/docs

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |
| offset | number |  |
| limit | number |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sortBy | [ApiSortBy](/src/models/README.md#apisortby) |  |
| direction | [Direction](/src/models/README.md#direction) |  |
| statuses | string[] |  |
| tags | number[] |  |
| createdByIds | number[] |  |


**Return Type**

PaginatedDocResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.api
    .getApiDocs(71794570.11072814, -63388951.020821825, -31229376.325391814, { sortBy: 'createdAt', direction: 'asc', statuses: ["IN_PROGRESS","IN_PROGRESS"], tags: [-64922116.97589298,40153994.54170412], createdByIds: [7448186.750577703,43963136.09510094] });
  console.log(result);
})();

```

### **createApi**

- HTTP Method: POST
- Endpoint: /apis

**Required Parameters**

| input | object | Request body. |



**Return Type**

ApiResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {};
  const result = await sdk.api
    .createApi(input);
  console.log(result);
})();

```

### **getApis**

- HTTP Method: GET
- Endpoint: /apis

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| orgId | number |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| apiSlug | string |  |


**Return Type**

GetApisResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.api
    .getApis(-11739860.187373236, { apiSlug: 'apiSlug' });
  console.log(result);
})();

```

### **searchApis**

- HTTP Method: GET
- Endpoint: /apis/search

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| offset | number |  |
| limit | number |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| name | string |  |
| sortBy | [ApiSortBy](/src/models/README.md#apisortby) |  |
| orgId | number |  |
| direction | [ApiDirection](/src/models/README.md#apidirection) |  |
| orgIds | number[] |  |


**Return Type**

ApisSearchPaginatedResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.api
    .searchApis(70690856.84279081, -54430607.670830056, { name: 'name', sortBy: 'createdAt', orgId: 81918794.47871399, direction: 'desc', orgIds: [73316501.19369271,-76387666.92553306] });
  console.log(result);
})();

```

### **getApiById**

- HTTP Method: GET
- Endpoint: /apis/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

ApiResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.api
    .getApiById(-60791255.3654018);
  console.log(result);
})();

```

### **updateApi**

- HTTP Method: PATCH
- Endpoint: /apis/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |
| input | object | Request body. |



**Return Type**

ApiResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"name":"My api name","version":"1.0.1"};
  const result = await sdk.api
    .updateApi(input, -96192288.9227357);
  console.log(result);
})();

```

### **removeApi**

- HTTP Method: DELETE
- Endpoint: /apis/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.api
    .removeApi(5749880.731633678);
  console.log(result);
})();

```

### **getApiMembers**

- HTTP Method: GET
- Endpoint: /apis/{id}/members

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

GetApiMembersResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.api
    .getApiMembers(-34269360.48728169);
  console.log(result);
})();

```

### **getApiByOrgSlugAndApiSlug**

- HTTP Method: GET
- Endpoint: /apis/{orgSlug}/{apiSlug}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| orgSlug | string |  |
| apiSlug | string |  |



**Return Type**

GetApiByOrgSlugAndApiSlugResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.api
    .getApiByOrgSlugAndApiSlug('orgSlug', 'apiSlug');
  console.log(result);
})();

```


### **createOrg**

- HTTP Method: POST
- Endpoint: /orgs

**Required Parameters**

| input | object | Request body. |



**Return Type**

OrgResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"description":"Example Org Description","domain":"business.com","logoUrl":"https://liblab.com/images/logo.png","name":"Example Org","website":"https://example.com"};
  const result = await sdk.org
    .createOrg(input);
  console.log(result);
})();

```

### **getOrgs**

- HTTP Method: GET
- Endpoint: /orgs

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| offset | number |  |
| limit | number |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| direction | [Direction](/src/models/README.md#direction) |  |
| sortBy | [OrgSortBy](/src/models/README.md#orgsortby) |  |


**Return Type**

AdminPaginatedOrgResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.org
    .getOrgs(89496877.97020927, -28618597.380428404, { direction: 'asc', sortBy: 'status' });
  console.log(result);
})();

```

### **searchOrgs**

- HTTP Method: GET
- Endpoint: /orgs/search

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| offset | number |  |
| limit | number |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| website | string |  |
| domain | string |  |
| name | string |  |


**Return Type**

AdminPaginatedOrgResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.org
    .searchOrgs(-45164511.969062634, -23191018.287497208, { website: 'website', domain: 'domain', name: 'name' });
  console.log(result);
})();

```

### **getOrgById**

- HTTP Method: GET
- Endpoint: /orgs/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

OrgResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.org
    .getOrgById(47803670.13337746);
  console.log(result);
})();

```

### **updateOrg**

- HTTP Method: PATCH
- Endpoint: /orgs/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |
| input | object | Request body. |



**Return Type**

OrgResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"description":"Example Org Description","domain":"example.com","isAllowedForBeta":true,"logoUrl":"https://liblab.com/images/logo.png","name":"Example Org","website":"https://example.com"};
  const result = await sdk.org
    .updateOrg(input, -46805764.8598259);
  console.log(result);
})();

```

### **removeOrg**

- HTTP Method: DELETE
- Endpoint: /orgs/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.org
    .removeOrg(-79128824.1812774);
  console.log(result);
})();

```

### **getApisByOrg**

- HTTP Method: GET
- Endpoint: /orgs/{id}/apis

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

GetApisByOrgResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.org
    .getApisByOrg(49723479.24665755);
  console.log(result);
})();

```

### **getOrgJobs**

- HTTP Method: GET
- Endpoint: /orgs/{id}/jobs

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |
| offset | number |  |
| limit | number |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sortBy | [OrgSortBy](/src/models/README.md#orgsortby) |  |
| direction | [Direction](/src/models/README.md#direction) |  |
| statuses | string[] |  |
| createdByIds | number[] |  |
| apiSlug | string |  |
| apiVersion | string |  |
| buildType | string[] |  |


**Return Type**

PaginatedOrgJobsResponseWithTotalCount

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.org
    .getOrgJobs(-28684282.456158176, -40827138.785822116, -70455469.66586128, { sortBy: 'startTime', direction: 'asc', statuses: ["SUCCESS","SUCCESS"], createdByIds: [-59636207.178309105,-1032034.0482700318], apiSlug: 'apiSlug', apiVersion: 'apiVersion', buildType: ["SNIPPETS","SNIPPETS"] });
  console.log(result);
})();

```

### **getDocsByOrg**

- HTTP Method: GET
- Endpoint: /orgs/{id}/docs

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

GetDocsByOrgResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.org
    .getDocsByOrg(-53935859.163382016);
  console.log(result);
})();

```

### **getBuildByOrg**

- HTTP Method: GET
- Endpoint: /orgs/{id}/builds

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |
| offset | number |  |
| limit | number |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sortBy | [OrgSortBy](/src/models/README.md#orgsortby) |  |
| direction | [Direction](/src/models/README.md#direction) |  |
| statuses | string[] |  |
| tags | number[] |  |
| createdByIds | number[] |  |
| apiSlug | string |  |
| apiVersion | string |  |


**Return Type**

PaginatedOrgBuildsWithJobsResponseWithTotalCount

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.org
    .getBuildByOrg(73857521.0450561, -37690933.44492305, -36733907.49042018, { sortBy: 'status', direction: 'asc', statuses: ["IN_PROGRESS","FAILURE"], tags: [-80461885.62798235,-39626562.98278295], createdByIds: [78611861.80853122,-29384317.810344696], apiSlug: 'apiSlug', apiVersion: 'apiVersion' });
  console.log(result);
})();

```

### **getOrgApiBuilds**

- HTTP Method: GET
- Endpoint: /orgs/{id}/api-builds

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

GetOrgApiBuildsResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.org
    .getOrgApiBuilds(-68701706.17935911);
  console.log(result);
})();

```

### **getOrgArtifacts**

- HTTP Method: GET
- Endpoint: /orgs/{id}/artifacts

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |
| offset | number |  |
| limit | number |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sortBy | [OrgSortBy](/src/models/README.md#orgsortby) |  |
| direction | [OrgDirection](/src/models/README.md#orgdirection) |  |
| artifactTypes | [ArtifactTypes](/src/models/README.md#artifacttypes) |  |
| statuses | [OrgStatuses](/src/models/README.md#orgstatuses) |  |
| createdByIds | number[] |  |


**Return Type**

PaginatedOrgArtifactsResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.org
    .getOrgArtifacts(-59739607.39640303, -10618676.810144216, -50247270.83883523, { sortBy: 'createdAt', direction: 'desc', artifactTypes: ["DOC","SDK"], statuses: [{"imports":[]},{"imports":[]}], createdByIds: [-85030503.61275429,8458977.314442202] });
  console.log(result);
})();

```


### **createMember**

- HTTP Method: POST
- Endpoint: /orgs/{orgId}/members

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| orgId | number |  |
| input | object | Request body. |



**Return Type**

OrgMemberResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"role":"MEMBER","userId":1};
  const result = await sdk.orgMember
    .createMember(input, 94680610.61331913);
  console.log(result);
})();

```

### **getByOrgId**

- HTTP Method: GET
- Endpoint: /orgs/{orgId}/members

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| orgId | number |  |
| offset | number |  |
| limit | number |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| email | string |  |
| firstName | string |  |
| lastName | string |  |
| sortBy | [OrgMemberSortBy](/src/models/README.md#orgmembersortby) |  |
| direction | [Direction](/src/models/README.md#direction) |  |


**Return Type**

PaginatedOrgMemberResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.orgMember
    .getByOrgId(-55574139.84502988, -88184935.12755018, -93873146.36253665, { email: 'email', firstName: 'firstName', lastName: 'lastName', sortBy: 'createdAt', direction: 'asc' });
  console.log(result);
})();

```

### **updateMember**

- HTTP Method: PATCH
- Endpoint: /orgs/{orgId}/members/{userId}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| userId | number |  |
| orgId | number |  |
| input | object | Request body. |



**Return Type**

OrgMemberResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"orgId":1,"role":"MEMBER"};
  const result = await sdk.orgMember
    .updateMember(input, -57714749.88356573, -30148188.860511243);
  console.log(result);
})();

```

### **removeMember**

- HTTP Method: DELETE
- Endpoint: /orgs/{orgId}/members/{userId}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| userId | number |  |
| orgId | number |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.orgMember
    .removeMember(38800093.42800757, 85698462.04002455);
  console.log(result);
})();

```

### **leaveOrg**

- HTTP Method: DELETE
- Endpoint: /orgs/{orgId}/leave

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| orgId | number |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.orgMember
    .leaveOrg(-5845686.3625938);
  console.log(result);
})();

```

### **enableAllMembers**

- HTTP Method: PATCH
- Endpoint: /orgs/{orgId}/enable

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| orgId | number |  |



**Return Type**

UpdateManyOrgMembersResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.orgMember
    .enableAllMembers(2236273.1314656585);
  console.log(result);
})();

```

### **disableAllMembers**

- HTTP Method: PATCH
- Endpoint: /orgs/{orgId}/disable

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| orgId | number |  |



**Return Type**

UpdateManyOrgMembersResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.orgMember
    .disableAllMembers(-79456642.26302162);
  console.log(result);
})();

```


### **createArtifact**

- HTTP Method: POST
- Endpoint: /artifacts

**Required Parameters**

| input | object | Request body. |



**Return Type**

ArtifactResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"artifactType":"DOC","bucketKey":"bucketKey","bucketName":"bucketName","buildId":1,"status":"SUCCESS"};
  const result = await sdk.artifact
    .createArtifact(input);
  console.log(result);
})();

```

### **getArtifacts**

- HTTP Method: GET
- Endpoint: /artifacts

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| buildId | number |  |



**Return Type**

GetArtifactsResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.artifact
    .getArtifacts(-16917372.978192806);
  console.log(result);
})();

```

### **getArtifactStatuses**

- HTTP Method: GET
- Endpoint: /artifacts/statuses




**Return Type**

GetArtifactStatusesResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.artifact
    .getArtifactStatuses();
  console.log(result);
})();

```

### **getArtifactById**

- HTTP Method: GET
- Endpoint: /artifacts/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

ArtifactResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.artifact
    .getArtifactById(50288696.82264063);
  console.log(result);
})();

```

### **removeArtifact**

- HTTP Method: DELETE
- Endpoint: /artifacts/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.artifact
    .removeArtifact(-56882928.125125654);
  console.log(result);
})();

```


### **createSdk**

- HTTP Method: POST
- Endpoint: /sdks

**Required Parameters**

| input | object | Request body. |



**Return Type**

SdkResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"artifactId":1,"fileLocation":"https://my-file.location","language":"JAVA","version":"1.0.0"};
  const result = await sdk.sdk
    .createSdk(input);
  console.log(result);
})();

```

### **findSdks**

- HTTP Method: GET
- Endpoint: /sdks

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| offset | number |  |
| limit | number |  |
| artifactId | number |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| sortBy | [SdkSortBy](/src/models/README.md#sdksortby) |  |
| direction | [Direction](/src/models/README.md#direction) |  |


**Return Type**

PaginatedSdkResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.sdk
    .findSdks(-27864344.86222133, -75319273.4760771, 48323961.96477184, { sortBy: 'language', direction: 'asc' });
  console.log(result);
})();

```

### **getSdkById**

- HTTP Method: GET
- Endpoint: /sdks/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

SdkResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.sdk
    .getSdkById(25805660.139813468);
  console.log(result);
})();

```

### **removeSdk**

- HTTP Method: DELETE
- Endpoint: /sdks/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.sdk
    .removeSdk(-70523397.85685779);
  console.log(result);
})();

```


### **getApprovedByOrgSlugAndApiSlug**

- HTTP Method: GET
- Endpoint: /docs/approved

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| orgSlug | string |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| apiSlug | string |  |
| apiVersion | string |  |


**Return Type**

DocResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.doc
    .getApprovedByOrgSlugAndApiSlug('orgSlug', { apiSlug: 'apiSlug', apiVersion: 'apiVersion' });
  console.log(result);
})();

```

### **getAllApprovedByOrgSlugAndApiSlug**

- HTTP Method: GET
- Endpoint: /docs/approved/all

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| orgSlug | string |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| apiSlug | string |  |
| apiVersion | string |  |


**Return Type**

GetAllApprovedByOrgSlugAndApiSlugResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.doc
    .getAllApprovedByOrgSlugAndApiSlug('orgSlug', { apiSlug: 'apiSlug', apiVersion: 'apiVersion' });
  console.log(result);
})();

```

### **createDoc**

- HTTP Method: POST
- Endpoint: /docs

**Required Parameters**

| input | object | Request body. |



**Return Type**

DocCreatedResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"apiId":-41122605.96370008,"artifactId":1,"fileLocation":"https://example.com","previewSlug":"previewSlug","version":"1.0.0"};
  const result = await sdk.doc
    .createDoc(input);
  console.log(result);
})();

```

### **findDocs**

- HTTP Method: GET
- Endpoint: /docs

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| offset | number |  |
| limit | number |  |
| artifactId | number |  |



**Return Type**

PaginatedDocResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.doc
    .findDocs(-56503326.90506161, -96794016.70654029, 31102218.51034631);
  console.log(result);
})();

```

### **approve**

- HTTP Method: POST
- Endpoint: /docs/{previewSlug}/approve

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| previewSlug | string |  |



**Return Type**

DocResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.doc
    .approve('previewSlug');
  console.log(result);
})();

```

### **unapprove**

- HTTP Method: POST
- Endpoint: /docs/{previewSlug}/unapprove

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| previewSlug | string |  |



**Return Type**

DocResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.doc
    .unapprove('previewSlug');
  console.log(result);
})();

```

### **getDocById**

- HTTP Method: GET
- Endpoint: /docs/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

DocResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.doc
    .getDocById(34682923.6455763);
  console.log(result);
})();

```

### **removeDoc**

- HTTP Method: DELETE
- Endpoint: /docs/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.doc
    .removeDoc(41802488.993278176);
  console.log(result);
})();

```

### **updateDoc**

- HTTP Method: PUT
- Endpoint: /docs/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |
| input | object | Request body. |



**Return Type**

DocResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"fileLocation":"https://example.com","version":"1.0.0"};
  const result = await sdk.doc
    .updateDoc(input, -94769766.71355444);
  console.log(result);
})();

```

### **getDownloadUrl**

- HTTP Method: GET
- Endpoint: /docs/{id}/getDownloadUrl

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

DocDownloadResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.doc
    .getDownloadUrl(29030372.770268813);
  console.log(result);
})();

```


### **sendShadowForm**

- HTTP Method: POST
- Endpoint: /hubspot/shadow-form

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"fields":[{"name":"test-name","value":"test-field"}]};
  const result = await sdk.hubSpot
    .sendShadowForm(input);
  console.log(result);
})();

```


### **getActiveSubscription**

- HTTP Method: GET
- Endpoint: /orgs/{orgId}/subscriptions/active

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| orgId | number |  |



**Return Type**

SubscriptionResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.subscription
    .getActiveSubscription(-83817243.19198343);
  console.log(result);
})();

```

### **getCheckoutLink**

- HTTP Method: GET
- Endpoint: /orgs/{orgId}/subscriptions/checkout/link

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| orgId | number |  |
| planId | number |  |
| billingInterval | [BillingInterval](/src/models/README.md#billinginterval) |  |



**Return Type**

CheckoutLinkResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.subscription
    .getCheckoutLink(-47356964.369781405, -11732693.83741577, 'month');
  console.log(result);
})();

```


### **stripeWebhook**

- HTTP Method: POST
- Endpoint: /payment-provider/stripe/webhook

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| stripeSignature | string |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.paymentProvider
    .stripeWebhook('stripe-signature');
  console.log(result);
})();

```


### **getCurrentUser**

- HTTP Method: GET
- Endpoint: /users/current-user




**Return Type**

CurrentUserResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.user
    .getCurrentUser();
  console.log(result);
})();

```

### **createUser**

- HTTP Method: POST
- Endpoint: /users

**Required Parameters**

| input | object | Request body. |



**Return Type**

UserResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"auth0Id":"auth0|123","email":"someone@example.com","firstName":"John","lastName":"Doe","password":"Password123!","signupMethod":"DEFAULT"};
  const result = await sdk.user
    .createUser(input);
  console.log(result);
})();

```

### **getUsers**

- HTTP Method: GET
- Endpoint: /users

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| offset | number |  |
| limit | number |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| orgId | number |  |
| email | string |  |
| firstName | string |  |
| lastName | string |  |
| orgIds | number[] |  |
| sortBy | [UserSortBy](/src/models/README.md#usersortby) |  |
| direction | [UserDirection](/src/models/README.md#userdirection) |  |


**Return Type**

UsersResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.user
    .getUsers(54029979.0987466, -54971816.566975996, { orgId: -14482513.19994469, email: 'email', firstName: 'firstName', lastName: 'lastName', orgIds: [86735039.76253417,-17882580.162973925], sortBy: 'createdAt', direction: 'desc' });
  console.log(result);
})();

```

### **getUserById**

- HTTP Method: GET
- Endpoint: /users/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

UserResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.user
    .getUserById(90168537.16010264);
  console.log(result);
})();

```

### **updateUser**

- HTTP Method: PATCH
- Endpoint: /users/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |
| input | object | Request body. |



**Return Type**

UserResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"email":"someone@example.com","firstName":"John","isEnabled":true,"isLiblabAdmin":true,"lastName":"Doe","refreshTokenHash":"refreshTokenHash"};
  const result = await sdk.user
    .updateUser(input, 78087325.84576088);
  console.log(result);
})();

```

### **removeUser**

- HTTP Method: DELETE
- Endpoint: /users/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.user
    .removeUser(-30148046.88195744);
  console.log(result);
})();

```

### **updateEmailSubscription**

- HTTP Method: PATCH
- Endpoint: /users/emails/subscriptions

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"isSubscribedToEmails":true};
  const result = await sdk.user
    .updateEmailSubscription(input);
  console.log(result);
})();

```

### **getUserOrgs**

- HTTP Method: GET
- Endpoint: /users/orgs

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| offset | number |  |
| limit | number |  |



**Return Type**

PaginatedOrgResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.user
    .getUserOrgs(98528820.69790348, -76669531.23080474);
  console.log(result);
})();

```

### **getUserApis**

- HTTP Method: GET
- Endpoint: /users/apis




**Return Type**

GetUserApisResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.user
    .getUserApis();
  console.log(result);
})();

```


### **createToken**

- HTTP Method: POST
- Endpoint: /auth/tokens

**Required Parameters**

| input | object | Request body. |



**Return Type**

CreateTokenResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"expiresAt":"2024-01-01T01:01:01.0Z","name":"My token","scope":["API","DOC","SDK","BUILD","ARTIFACT","ORG"]};
  const result = await sdk.token
    .createToken(input);
  console.log(result);
})();

```

### **findTokensByUserId**

- HTTP Method: GET
- Endpoint: /auth/tokens

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| userId | number |  |



**Return Type**

FindTokensByUserIdResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.token
    .findTokensByUserId(35726246.993953794);
  console.log(result);
})();

```

### **getTokenById**

- HTTP Method: GET
- Endpoint: /auth/tokens/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

GetTokenResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.token
    .getTokenById(-64380743.517839976);
  console.log(result);
})();

```

### **removeToken**

- HTTP Method: DELETE
- Endpoint: /auth/tokens/{id}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| id | number |  |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.token
    .removeToken(-65086394.95152986);
  console.log(result);
})();

```


### **createOrgInvite**

- HTTP Method: POST
- Endpoint: /invitations/org/{orgId}/invite

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| orgId | number |  |
| input | object | Request body. |



**Return Type**

InvitationResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"email":"harry@liblab.com"};
  const result = await sdk.invitation
    .createOrgInvite(input, 69625254.74119666);
  console.log(result);
})();

```

### **redeemInvite**

- HTTP Method: PATCH
- Endpoint: /invitations/{inviteCode}/redeem

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| inviteCode | string |  |



**Return Type**

InvitationResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.invitation
    .redeemInvite('inviteCode');
  console.log(result);
})();

```

### **declineInvite**

- HTTP Method: PATCH
- Endpoint: /invitations/{inviteCode}/decline

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| inviteCode | string |  |



**Return Type**

InvitationResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.invitation
    .declineInvite('inviteCode');
  console.log(result);
})();

```

### **getReceivedInvites**

- HTTP Method: GET
- Endpoint: /invitations/received

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| offset | number |  |
| limit | number |  |



**Return Type**

PaginatedOrgInvitesResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.invitation
    .getReceivedInvites(59661679.89653614, -52006286.83559325);
  console.log(result);
})();

```

### **getSentInvites**

- HTTP Method: GET
- Endpoint: /invitations/sent

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| offset | number |  |
| limit | number |  |



**Return Type**

PaginatedOrgInvitesResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.invitation
    .getSentInvites(83278640.740976, -19404540.915830523);
  console.log(result);
})();

```

### **searchInvites**

- HTTP Method: GET
- Endpoint: /invitations/search

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| offset | number |  |
| limit | number |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| orgName | string | Name of the organization |
| status | [Status](/src/models/README.md#status) | Status of the invitation |
| sortBy | [InvitationSortBy](/src/models/README.md#invitationsortby) | Field to sort by |
| direction | [InvitationDirection](/src/models/README.md#invitationdirection) | Direction to sort by |


**Return Type**

PaginatedOrgInvitesResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.invitation
    .searchInvites(-32253969.97392425, -97063602.5797256, { orgName: 'orgName', status: 'REDEEMED', sortBy: 'createdAt', direction: 'desc' });
  console.log(result);
})();

```

### **getInviteByCode**

- HTTP Method: GET
- Endpoint: /invitations/{inviteCode}

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| inviteCode | string |  |



**Return Type**

InvitationResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.invitation
    .getInviteByCode('inviteCode');
  console.log(result);
})();

```


### **resetPasswordAuth0**

- HTTP Method: POST
- Endpoint: /auth0/reset-password




**Return Type**

Auth0ResetPasswordResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.auth0
    .resetPasswordAuth0();
  console.log(result);
})();

```


### **getEnabledPlans**

- HTTP Method: GET
- Endpoint: /plans/enabled




**Return Type**

GetEnabledPlansResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.plan
    .getEnabledPlans();
  console.log(result);
})();

```


### **validateSpec**

- HTTP Method: POST
- Endpoint: /spec/validate

**Required Parameters**

| input | object | Request body. |



**Return Type**

ValidateSpecResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {};
  const result = await sdk.spec
    .validateSpec(input);
  console.log(result);
})();

```


### **healthCheckControllerCheck**

- HTTP Method: GET
- Endpoint: /health-check




**Return Type**

HealthCheckResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.healthCheck
    .healthCheckControllerCheck();
  console.log(result);
})();

```


### **track**

- HTTP Method: POST
- Endpoint: /events

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"metadata":{"foo":"bar"},"name":"my-event","userToken":"userToken"};
  const result = await sdk.event
    .track(input);
  console.log(result);
})();

```


### **create**

- HTTP Method: POST
- Endpoint: /tags

**Required Parameters**

| input | object | Request body. |



**Return Type**

TagResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"name":"tag"};
  const result = await sdk.tags
    .create(input);
  console.log(result);
})();

```

### **search**

- HTTP Method: GET
- Endpoint: /tags

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| offset | number |  |
| limit | number |  |
| searchQuery | string |  |



**Return Type**

SearchResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.tags
    .search(44984104.51574087, -3767956.3162754476, 'searchQuery');
  console.log(result);
})();

```


### **askAboutSpec**

- HTTP Method: POST
- Endpoint: /ai/ask-about-spec

**Required Parameters**

| input | object | Request body. |



**Return Type**

AskAboutSpecResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"buildId":12345,"prompt":"How can I login in this api?"};
  const result = await sdk.ai
    .askAboutSpec(input);
  console.log(result);
})();

```


### **sendFeedback**

- HTTP Method: POST
- Endpoint: /feedback

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"message":"message","title":"title"};
  const result = await sdk.feedback
    .sendFeedback(input);
  console.log(result);
})();

```


### **getUserEvents**

- HTTP Method: GET
- Endpoint: /user-events

**Required Parameters**

| Name    | Type| Description |
| :-------- | :----------| :----------|
| offset | number |  |
| limit | number |  |

**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| email | string |  |
| orgId | number |  |
| sortBy | [UserEventSortBy](/src/models/README.md#usereventsortby) |  |
| direction | [UserEventDirection](/src/models/README.md#usereventdirection) |  |
| orgIds | number[] |  |
| eventIds | number[] |  |


**Return Type**

PaginatedUserEventsResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.userEvent
    .getUserEvents(19061347.06545104, -74852820.7468976, { email: 'email', orgId: -8208711.681000531, sortBy: 'timestamp', direction: 'desc', orgIds: [56786671.17030537,62798910.94295138], eventIds: [60251962.325823575,27116418.40345411] });
  console.log(result);
})();

```

### **exportUserEventsToCsv**

- HTTP Method: GET
- Endpoint: /user-events/export-to-csv


**Optional Parameters**

Optional parameters are passed as part of the last parameter to the method. Ex. {optionalParam1 : 'value1', optionalParam2: 'value2'}

| Name    | Type| Description |
| :-------- | :----------| :----------|
| email | string |  |
| orgId | number |  |
| filename | string |  |
| orgIds | number[] |  |
| eventIds | number[] |  |


**Return Type**

ExportUserEventsToCsvResponse

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const result = await sdk.userEvent
    .exportUserEventsToCsv({ email: 'email', orgId: 43801518.50420004, filename: 'filename', orgIds: [-84596936.39902475,-97111656.17432767], eventIds: [94707894.65031698,31459108.79068032] });
  console.log(result);
})();

```

### **trackUserPublishPrEvent**

- HTTP Method: POST
- Endpoint: /user-events/track-user-publish-pr-event

**Required Parameters**

| input | object | Request body. |



**Return Type**

Returns a dict object.

**Example Usage Code Snippet**
```Typescript
import { Liblab } from '@liblab/sdk';


const sdk = new Liblab({ accessToken: process.env.LIBLAB_ACCESS_TOKEN });

(async () => {
  const input = {"language":"typescript","sdk":"My SDK","success":true};
  const result = await sdk.userEvent
    .trackUserPublishPrEvent(input);
  console.log(result);
})();

```




