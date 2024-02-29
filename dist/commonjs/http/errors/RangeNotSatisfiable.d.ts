import { BaseHTTPError } from './base';
export default class RangeNotSatisfiable extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=RangeNotSatisfiable.d.ts.map