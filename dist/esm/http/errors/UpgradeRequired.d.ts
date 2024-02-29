import { BaseHTTPError } from './base';
export default class UpgradeRequired extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=UpgradeRequired.d.ts.map