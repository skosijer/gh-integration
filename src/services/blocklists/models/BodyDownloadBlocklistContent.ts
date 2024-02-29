export interface BodyDownloadBlocklistContent {
  raw?: [unknown, unknown][];
  scope?: Scope;
  headers_?: Headers_;
}
interface Scope {
  [k: string]: unknown;
}
interface Headers_ {
  [k: string]: string;
}
