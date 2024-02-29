import { BaseHTTPError } from './base';
export default class NotExtended extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=NotExtended.d.ts.map