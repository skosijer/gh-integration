import { BaseHTTPError } from './base';
export default class HttpVersionNotSupported extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=HttpVersionNotSupported.d.ts.map