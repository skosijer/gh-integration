import { BaseHTTPError } from './base';
export default class BadGateway extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=BadGateway.d.ts.map