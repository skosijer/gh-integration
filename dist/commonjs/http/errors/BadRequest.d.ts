import { BaseHTTPError } from './base';
export default class BadRequest extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=BadRequest.d.ts.map