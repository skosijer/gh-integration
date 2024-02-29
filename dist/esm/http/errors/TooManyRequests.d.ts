import { BaseHTTPError } from './base';
export default class TooManyRequests extends BaseHTTPError {
    statusCode: number;
    title: string;
    retryAfter: number | null;
    constructor(detail?: string, retryAfter?: number | null);
}
//# sourceMappingURL=TooManyRequests.d.ts.map