import { BaseHTTPError } from './base';
export default class UnsufficientStorage extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=UnsufficientStorage.d.ts.map