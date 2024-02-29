import { BaseHTTPError } from './base';
export default class UnprocessableEntity extends BaseHTTPError {
    statusCode: number;
    title: string;
    constructor(detail?: string);
}
//# sourceMappingURL=UnprocessableEntity.d.ts.map