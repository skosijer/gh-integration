import { BaseHTTPError } from './base';
export default class Gone extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=Gone.d.ts.map