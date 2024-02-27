import { AiService } from './services/ai/Ai';
import { ApiService } from './services/api/Api';
import { ArtifactService } from './services/artifact/Artifact';
import { Auth0Service } from './services/auth0/Auth0';
import { BuildService } from './services/build/Build';
import { DocService } from './services/doc/Doc';
import { EventService } from './services/event/Event';
import { FeedbackService } from './services/feedback/Feedback';
import { HealthCheckService } from './services/healthCheck/HealthCheck';
import { HubSpotService } from './services/hubSpot/HubSpot';
import { InvitationService } from './services/invitation/Invitation';
import { OrgService } from './services/org/Org';
import { OrgMemberService } from './services/orgMember/OrgMember';
import { PaymentProviderService } from './services/paymentProvider/PaymentProvider';
import { PlanService } from './services/plan/Plan';
import { SdkService } from './services/sdk/Sdk';
import { SpecService } from './services/spec/Spec';
import { SubscriptionService } from './services/subscription/Subscription';
import { TagsService } from './services/tags/Tags';
import { TokenService } from './services/token/Token';
import { UserService } from './services/user/User';
import { UserEventService } from './services/userEvent/UserEvent';
import { Environment } from './http/Environment';

export * from './http/Environment';

export * from './models';



export * as AiModels from './services/ai'
export * as ApiModels from './services/api'
export * as ArtifactModels from './services/artifact'
export * as Auth0Models from './services/auth0'
export * as BuildModels from './services/build'
export * as DocModels from './services/doc'
export * as EventModels from './services/event'
export * as FeedbackModels from './services/feedback'
export * as HealthCheckModels from './services/healthCheck'
export * as HubSpotModels from './services/hubSpot'
export * as InvitationModels from './services/invitation'
export * as OrgMemberModels from './services/orgMember'
export * as OrgModels from './services/org'
export * as PlanModels from './services/plan'
export * as SdkModels from './services/sdk'
export * as SpecModels from './services/spec'
export * as SubscriptionModels from './services/subscription'
export * as TagsModels from './services/tags'
export * as TokenModels from './services/token'
export * as UserEventModels from './services/userEvent'
export * as UserModels from './services/user'

type Config = {
environment?: Environment;
accessToken?: string;
}

export * from './http/errors';


export class Liblab {
  public ai:AiService;
public api:ApiService;
public artifact:ArtifactService;
public auth0:Auth0Service;
public build:BuildService;
public doc:DocService;
public event:EventService;
public feedback:FeedbackService;
public healthCheck:HealthCheckService;
public hubSpot:HubSpotService;
public invitation:InvitationService;
public org:OrgService;
public orgMember:OrgMemberService;
public paymentProvider:PaymentProviderService;
public plan:PlanService;
public sdk:SdkService;
public spec:SpecService;
public subscription:SubscriptionService;
public tags:TagsService;
public token:TokenService;
public user:UserService;
public userEvent:UserEventService;

  constructor({environment = Environment.DEFAULT, accessToken = ''}: Config) {
this.ai = new AiService(accessToken);
this.api = new ApiService(accessToken);
this.artifact = new ArtifactService(accessToken);
this.auth0 = new Auth0Service(accessToken);
this.build = new BuildService(accessToken);
this.doc = new DocService(accessToken);
this.event = new EventService(accessToken);
this.feedback = new FeedbackService(accessToken);
this.healthCheck = new HealthCheckService(accessToken);
this.hubSpot = new HubSpotService(accessToken);
this.invitation = new InvitationService(accessToken);
this.org = new OrgService(accessToken);
this.orgMember = new OrgMemberService(accessToken);
this.paymentProvider = new PaymentProviderService(accessToken);
this.plan = new PlanService(accessToken);
this.sdk = new SdkService(accessToken);
this.spec = new SpecService(accessToken);
this.subscription = new SubscriptionService(accessToken);
this.tags = new TagsService(accessToken);
this.token = new TokenService(accessToken);
this.user = new UserService(accessToken);
this.userEvent = new UserEventService(accessToken);
this.setBaseUrl(environment);
}

  /**
 * Sets the environment with which the SDK will interact.
 * @param {Environment} environment
 */
setEnvironment(environment: Environment): void {
  this.setBaseUrl(environment);
}


/**
 * Sets the baseUrl that the SDK will use for its requests. See {@link setEnvironment} to use pre-defined environments.
 * @param {string} url
 */
setBaseUrl(url: string): void {
this.ai.setBaseUrl(url);
this.api.setBaseUrl(url);
this.artifact.setBaseUrl(url);
this.auth0.setBaseUrl(url);
this.build.setBaseUrl(url);
this.doc.setBaseUrl(url);
this.event.setBaseUrl(url);
this.feedback.setBaseUrl(url);
this.healthCheck.setBaseUrl(url);
this.hubSpot.setBaseUrl(url);
this.invitation.setBaseUrl(url);
this.org.setBaseUrl(url);
this.orgMember.setBaseUrl(url);
this.paymentProvider.setBaseUrl(url);
this.plan.setBaseUrl(url);
this.sdk.setBaseUrl(url);
this.spec.setBaseUrl(url);
this.subscription.setBaseUrl(url);
this.tags.setBaseUrl(url);
this.token.setBaseUrl(url);
this.user.setBaseUrl(url);
this.userEvent.setBaseUrl(url);
}


/**
 * Sets the access token used to authenticate.
 * @param {string} accessToken
 */
setAccessToken(accessToken: string) {
this.ai.setAccessToken(accessToken);
this.api.setAccessToken(accessToken);
this.artifact.setAccessToken(accessToken);
this.auth0.setAccessToken(accessToken);
this.build.setAccessToken(accessToken);
this.doc.setAccessToken(accessToken);
this.event.setAccessToken(accessToken);
this.feedback.setAccessToken(accessToken);
this.healthCheck.setAccessToken(accessToken);
this.hubSpot.setAccessToken(accessToken);
this.invitation.setAccessToken(accessToken);
this.org.setAccessToken(accessToken);
this.orgMember.setAccessToken(accessToken);
this.paymentProvider.setAccessToken(accessToken);
this.plan.setAccessToken(accessToken);
this.sdk.setAccessToken(accessToken);
this.spec.setAccessToken(accessToken);
this.subscription.setAccessToken(accessToken);
this.tags.setAccessToken(accessToken);
this.token.setAccessToken(accessToken);
this.user.setAccessToken(accessToken);
this.userEvent.setAccessToken(accessToken);
}

}


