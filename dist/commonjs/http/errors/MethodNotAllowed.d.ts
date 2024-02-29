import { BaseHTTPError } from './base';
export default class MethodNotAllowed extends BaseHTTPError {
    statusCode: number;
    title: string;
    allow?: string[];
    constructor(detail?: string, allow?: string[]);
}
//# sourceMappingURL=MethodNotAllowed.d.ts.map