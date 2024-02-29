import BaseService from '../../BaseService';
import Response from '../../http/Response';
import { PageEngine_ } from './models/PageEngine_';
import { Engine } from './models/Engine';
export declare class EnginesService extends BaseService {
    /**
     * @summary Get Engines
     * @description Get engines for an organization
  
     * @param organizationId Needed input variable
     * @param optionalParams - Optional parameters
     * @param optionalParams.page - Page number
     * @param optionalParams.size - Page size
     * @returns {Promise<Response<PageEngine_>>} - The promise with the result
     */
    getEngines(organizationId: string, optionalParams?: {
        page?: number;
        size?: number;
    }): Promise<Response<PageEngine_>>;
    /**
     * @summary Get Engine
     * @description Get an engine for an organization
  
     * @param organizationId Needed input variable
     * @param engineId Needed input variable
     * @returns {Promise<Response<Engine>>} - The promise with the result
     */
    getEngine(organizationId: string, engineId: string): Promise<Response<Engine>>;
}
//# sourceMappingURL=Engines.d.ts.map