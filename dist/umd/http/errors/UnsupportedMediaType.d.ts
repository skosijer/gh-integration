import { BaseHTTPError } from './base';
export default class UnsupportedMediaType extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=UnsupportedMediaType.d.ts.map