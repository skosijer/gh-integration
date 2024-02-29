import { BaseHTTPError } from './base';
export default class PreconditionFailed extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=PreconditionFailed.d.ts.map