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
    .getBuilds(89199639.45667958, -43195081.69643285, -88990535.09195624, 'apiSlug');
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
    .getById(-35570149.40155527);
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
    .tag(43031023.02201679, -84721089.25821371);
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
    .untag(-8621363.302401885, -26284045.620045632);
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
    .approveBuild(74168824.05613518);
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
    .unApproveBuild(67013629.288651586);
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
    .getApiBuilds(-16254129.996570826, -22510960.89854245, -24489818.565554693, { sortBy: 'startTime', direction: 'asc', statuses: ["SUCCESS","FAILURE"], tags: [-94061905.31378606,67368690.16196355], createdByIds: [-78954290.19766879,65558458.270656765] });
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
    .getApiBuildTags(-11049015.00461644);
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
    .getApiSdks(-20994906.959291056, -80675100.1366159, -41779747.09965025, { statuses: ["FAIL","SUCCESS"], tags: [-27874606.275940344,-22963100.177770317], createdByIds: [37043681.41051182,74143031.24244693], languages: ["JAVA","PYTHON"], sortBy: 'createdAt', direction: 'asc' });
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
    .getApiDocs(89940686.48230812, 16100795.037371844, -95925619.94625966, { sortBy: 'createdAt', direction: 'asc', statuses: ["FAIL","FAIL"], tags: [-27474480.39517981,91416493.81717288], createdByIds: [50789001.65969819,61880519.518191814] });
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
    .getApis(86874386.66795796, { apiSlug: 'apiSlug' });
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
    .searchApis(20978894.538367003, -68533518.48514709, { name: 'name', sortBy: 'createdAt', orgId: -19020016.683351934, direction: 'desc', orgIds: [56997245.136906594,-49049410.50308747] });
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
    .getApiById(-18644550.267550424);
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
    .updateApi(input, 48898486.30819914);
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
    .removeApi(-2210952.9362657666);
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
    .getApiMembers(-52584672.06226425);
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
    .getOrgs(14534993.74928993, -53233542.76471525, { direction: 'asc', sortBy: 'status' });
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
    .searchOrgs(76947229.44505498, -67776938.82960996, { website: 'website', domain: 'domain', name: 'name' });
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
    .getOrgById(50124655.67969948);
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
    .updateOrg(input, 71883455.56447893);
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
    .removeOrg(-34828015.92306397);
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
    .getApisByOrg(65434083.0313175);
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
    .getOrgJobs(89002286.01668581, 54183099.36924675, -73767403.75034115, { sortBy: 'startTime', direction: 'asc', statuses: ["SUCCESS","SUCCESS"], createdByIds: [39719836.41653103,99714672.00395057], apiSlug: 'apiSlug', apiVersion: 'apiVersion', buildType: ["SDK","SNIPPETS"] });
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
    .getDocsByOrg(54396850.87183994);
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
    .getBuildByOrg(39985709.300239205, 67148724.52329078, -9079203.819041207, { sortBy: 'status', direction: 'asc', statuses: ["FAILURE","SUCCESS"], tags: [23986197.00953582,-49169677.47258134], createdByIds: [97088408.4502722,16896108.86154434], apiSlug: 'apiSlug', apiVersion: 'apiVersion' });
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
    .getOrgApiBuilds(-13517426.7606069);
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
    .getOrgArtifacts(73839787.16742304, 10746770.905311197, -92152357.85298955, { sortBy: 'status', direction: 'desc', artifactTypes: ["DOC","SDK"], statuses: [{"imports":[]},{"imports":[]}], createdByIds: [-67634785.15156627,3484646.0934324414] });
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
    .createMember(input, 29325630.47504528);
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
    .getByOrgId(44684292.76413244, 82906552.3434796, -64707577.25840464, { email: 'email', firstName: 'firstName', lastName: 'lastName', sortBy: 'role', direction: 'asc' });
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
    .updateMember(input, 26913571.07614176, -81437737.84558311);
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
    .removeMember(-55459462.4139507, -53702853.10645899);
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
    .leaveOrg(64742632.26826015);
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
    .enableAllMembers(73610597.07062495);
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
    .disableAllMembers(-44360916.705882266);
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
    .getArtifacts(-11904885.45247814);
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
    .getArtifactById(-98415827.63758118);
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
    .removeArtifact(-74691098.24599238);
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
    .findSdks(64620684.16470331, -96206566.09253898, 11810644.354627043, { sortBy: 'createdAt', direction: 'asc' });
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
    .getSdkById(43961744.02484685);
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
    .removeSdk(49197840.85384834);
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
  const input = {"apiId":-89459998.74684061,"artifactId":1,"fileLocation":"https://example.com","previewSlug":"previewSlug","version":"1.0.0"};
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
    .findDocs(-61530990.1994785, -34244827.383706674, -83898411.88158354);
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
    .getDocById(-60978242.00287669);
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
    .removeDoc(8486626.717904106);
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
    .updateDoc(input, 51261807.37252945);
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
    .getDownloadUrl(7726711.28010498);
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
    .getActiveSubscription(5494058.524818838);
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
    .getCheckoutLink(80885408.20286885, -28363413.06643133, 'year');
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
    .getUsers(82201157.08976361, -36160325.000923045, { orgId: -76864174.78098106, email: 'email', firstName: 'firstName', lastName: 'lastName', orgIds: [-14449013.75314647,768397.4965750873], sortBy: 'createdAt', direction: 'desc' });
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
    .getUserById(59374157.82323924);
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
    .updateUser(input, 71151108.22544199);
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
    .removeUser(56761563.19364983);
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
    .getUserOrgs(69616408.15080291, -79740037.51479156);
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
    .findTokensByUserId(93810345.49655083);
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
    .getTokenById(-46484986.61697591);
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
    .removeToken(-74323885.13922542);
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
    .createOrgInvite(input, -51183191.41976006);
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
    .getReceivedInvites(79203795.99116632, -22051135.892643988);
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
    .getSentInvites(-65684675.33157816, -13549251.029990092);
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
    .searchInvites(58253079.29630038, -43997582.26901704, { orgName: 'orgName', status: 'EXPIRED', sortBy: 'createdAt', direction: 'desc' });
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
    .search(48389277.75743541, -36844366.05026087, 'searchQuery');
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
    .getUserEvents(-94627807.03406341, -29352176.15518254, { email: 'email', orgId: 47568751.76423025, sortBy: 'timestamp', direction: 'desc', orgIds: [37221202.443977386,-66692258.01870411], eventIds: [70335490.10897544,83941972.97548044] });
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
    .exportUserEventsToCsv({ email: 'email', orgId: -74653862.32182834, filename: 'filename', orgIds: [77945168.17535678,-43811126.62137601], eventIds: [-25776536.065758333,86289074.91330308] });
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




