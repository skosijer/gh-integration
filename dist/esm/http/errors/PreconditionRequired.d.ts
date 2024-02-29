import { BaseHTTPError } from './base';
export default class PreconditionRequired extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=PreconditionRequired.d.ts.map