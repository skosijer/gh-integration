import { BaseHTTPError } from './base';
export default class RequestHeaderFieldsTooLarge extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=RequestHeaderFieldsTooLarge.d.ts.map