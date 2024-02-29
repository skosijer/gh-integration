import { BaseHTTPError } from './base';
export default class InternalServerError extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=InternalServerError.d.ts.map