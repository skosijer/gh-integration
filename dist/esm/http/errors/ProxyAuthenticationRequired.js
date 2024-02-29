import { BaseHTTPError } from './base';
export default class ProxyAuthenticationRequired extends BaseHTTPError {
    constructor(detail = '', proxyAuthenticate) {
        super(detail);
        this.statusCode = 407;
        this.title = 'Proxy Authentication Required';
        this.proxyAuthenticate = proxyAuthenticate;
    }
}
//# sourceMappingURL=ProxyAuthenticationRequired.js.map