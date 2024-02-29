export interface UploadBlocklistContentRequest {
  /**
   * Blocklist file in txt format
   */
  file: import('fs').ReadStream | Buffer | File;
}
