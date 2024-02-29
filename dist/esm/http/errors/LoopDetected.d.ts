import { BaseHTTPError } from './base';
export default class LoopDetected extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=LoopDetected.d.ts.map