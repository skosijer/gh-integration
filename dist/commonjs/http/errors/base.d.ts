export interface IHTTPError extends Error {
    statusCode: number;
}
export interface IHTTPErrorDescription extends IHTTPError {
    type?: string;
    title: string;
    detail?: string;
    instance?: string;
}
export declare function isHTTPError(error: unknown): error is IHTTPError;
export declare function isHTTPIssue(error: unknown): error is IHTTPErrorDescription;
export declare class BaseHTTPError extends Error implements IHTTPError {
    type?: string;
    title: string;
    detail?: string;
    instance?: string;
    statusCode: number;
    constructor(detail?: string);
}
export declare function isClientError(error: Error): boolean;
export declare function isServerError(e: Error): boolean;
export type AuthenticateChallenge = string | string[];
//# sourceMappingURL=base.d.ts.map