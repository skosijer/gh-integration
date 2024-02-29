import { BaseHTTPError } from './base';
export default class RequestTimeout extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=RequestTimeout.d.ts.map