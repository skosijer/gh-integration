export type Explode = boolean;
export type QueryStyles = 'form' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject';
export type PathStyles = 'simple' | 'label' | 'matrix';
export declare function serializeQuery(style: QueryStyles, explode: Explode, key: string, value: unknown): string;
export declare function serializePath(style: PathStyles, explode: Explode, value: unknown, key?: string): string;
//# sourceMappingURL=QuerySerializer.d.ts.map