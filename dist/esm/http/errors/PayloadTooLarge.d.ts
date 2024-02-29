import { BaseHTTPError } from './base';
export default class PayloadTooLarge extends BaseHTTPError {
    statusCode: number;
    title: string;
    retryAfter: number | null;
    constructor(detail?: string, retryAfter?: number | null);
}
//# sourceMappingURL=PayloadTooLarge.d.ts.map