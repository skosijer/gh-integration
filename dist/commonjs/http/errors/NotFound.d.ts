import { BaseHTTPError } from './base';
export default class NotFound extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=NotFound.d.ts.map