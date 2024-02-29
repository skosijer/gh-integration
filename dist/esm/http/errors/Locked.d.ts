import { BaseHTTPError } from './base';
export default class Locked extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=Locked.d.ts.map