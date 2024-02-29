import { BaseHTTPError } from './base';
export default class NotImplemented extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=NotImplemented.d.ts.map