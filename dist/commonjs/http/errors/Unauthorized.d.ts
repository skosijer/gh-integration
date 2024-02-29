import { AuthenticateChallenge, BaseHTTPError } from './base';
export default class Unauthorized extends BaseHTTPError {
    statusCode: number;
    title: string;
    wwwAuthenticate?: AuthenticateChallenge;
    constructor(detail?: string, wwwAuthenticate?: AuthenticateChallenge);
}
//# sourceMappingURL=Unauthorized.d.ts.map