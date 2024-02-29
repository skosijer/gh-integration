import { BaseHTTPError } from './base';
export default class UriTooLong extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=UriTooLong.d.ts.map