import { BaseHTTPError } from './base';
export default class ServiceUnavailable extends BaseHTTPError {
    statusCode: number;
    title: string;
    retryAfter: number | null;
    constructor(detail?: string, retryAfter?: number | null);
}
//# sourceMappingURL=ServiceUnavailable.d.ts.map