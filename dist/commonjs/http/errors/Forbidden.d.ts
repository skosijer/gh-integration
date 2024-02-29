import { BaseHTTPError } from './base';
export default class Forbidden extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=Forbidden.d.ts.map