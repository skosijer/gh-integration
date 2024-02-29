import { BaseHTTPError } from './base';
export default class TooEarly extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=TooEarly.d.ts.map