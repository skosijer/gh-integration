import { BaseHTTPError } from './base';
export default class UnavailableForLegalReasons extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=UnavailableForLegalReasons.d.ts.map