import { AuthenticateChallenge, BaseHTTPError } from './base';
export default class ProxyAuthenticationRequired extends BaseHTTPError {
    statusCode: number;
    title: string;
    proxyAuthenticate?: AuthenticateChallenge;
    constructor(detail?: string, proxyAuthenticate?: AuthenticateChallenge);
}
//# sourceMappingURL=ProxyAuthenticationRequired.d.ts.map