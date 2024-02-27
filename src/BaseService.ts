import FormData from 'form-data';
import { Environment } from './http/Environment';
import HTTPLibrary from './http/HTTPLibrary';
import { Headers } from './http/HTTPClient';


export default class BaseService {
  public baseUrl: string = Environment.DEFAULT;

  public httpClient = new HTTPLibrary();

  
  
  

  

  
  
      private accessToken: string = '';

      private accessTokenPrefix: string = 'Bearer';

  
      setAccessToken(accessToken: string): void {
  this.accessToken = accessToken;
}

  
      getAuthorizationHeader(): Headers {

      const accessTokenAuth = { Authorization: `${this.accessTokenPrefix} ${this.accessToken}` };

      return {... accessTokenAuth}
    }
 
  
  
  setBaseUrl(url: string): void {
    this.baseUrl = url;
  }

  constructor(accessToken: string = '') {
    this.setAccessToken(accessToken);  }


static patternMatching(value: string, pattern: string, variableName: string) : string {
  if (!value) {
    throw new Error(`${variableName} cannot be null or undefined`);
  }
  if (!value.match(new RegExp(pattern))) {
    throw new Error(`Invalid value for ${variableName}: must match ${pattern}`);
  }
  return value;
}

  

  /**
   * Converts model objects to FormData for multipart/form-data requests
   *
   * @param {any} input  The original data that fills a model
   * @return {FormData}  The input converted to a form
   */
  static formData(input: { [key: string]: any }): any {
    const formData = new FormData();
    const flatInput: { [key: string]: any } = BaseService.flattenObject(input, '');
    Object.keys(flatInput).forEach((key) => {
      const value = flatInput[key];
      if (value !== undefined && value !== null) {
        if (value instanceof Date) {
          formData.append(key, value.toISOString());
        } else if (typeof value === 'boolean') {
          formData.append(key, value ? 'true' : 'false');
        } else if (value instanceof Array) {
          formData.append(key, value.join(','));
        } else {
          formData.append(key, value);
        }
      }
    });
    return formData;
  }

  /**
   * Flattens an object into a single level object
   * @param {Object} obj The object to flatten
   * @param {string} parentKey The parent key
   * @return {Object} The flattened object
   */
  static flattenObject = (obj: { [key: string]: any }, parentKey?: string): Object => {
    let result: { [key: string]: any } = {};
    Object.keys(obj).forEach((key) => {
      const value: any = obj[key];
      if (Object.hasOwn(value, '_readableState')) {
        result[key] = value;
        return;
      }
      if (
        Object.hasOwn(value, 'name') &&
        Object.hasOwn(value, 'lastModified') &&
        Object.hasOwn(value, 'size') &&
        Object.hasOwn(value, 'type') &&
        Object.hasOwn(value, 'webkitRelativePath')
      ) {
        result[key] = value;
        return;
      }

      if (value instanceof Array || value.path) {
        result[key] = value;
        return;
      }
      
      const formattedKey: string = parentKey ? `${parentKey}.${key}` : key;

      if (typeof value === 'object' && value !== null) {
        result = { ...result, ...BaseService.flattenObject(value, formattedKey) };
      } else {
        result[formattedKey] = value;
      }
    });
    return result;
  };



  static urlEncode = (input: { [key: string]: any }): string =>
    Object.keys(input)
      .map((key) => `${key}=${encodeURIComponent(input[key])}`)
      .join('&');
}
