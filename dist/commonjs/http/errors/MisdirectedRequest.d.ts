import { BaseHTTPError } from './base';
export default class MisdirectedRequest extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=MisdirectedRequest.d.ts.map