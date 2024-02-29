import { BaseHTTPError } from './base';
export default class GatewayTimeout extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=GatewayTimeout.d.ts.map