import { BaseHTTPError } from './base';
export default class NotAcceptable extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=NotAcceptable.d.ts.map