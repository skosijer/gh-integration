import { BaseHTTPError } from './base';
export default class FailedDependency extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=FailedDependency.d.ts.map