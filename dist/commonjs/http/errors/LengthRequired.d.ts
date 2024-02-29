import { BaseHTTPError } from './base';
export default class LengthRequired extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=LengthRequired.d.ts.map