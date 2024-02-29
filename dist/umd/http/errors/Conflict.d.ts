import { BaseHTTPError } from './base';
export default class Conflict extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=Conflict.d.ts.map