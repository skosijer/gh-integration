import { BaseHTTPError } from './base';
export default class ExpectationFailed extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=ExpectationFailed.d.ts.map