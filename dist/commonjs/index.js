"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Testsdk = exports.QuotasModels = exports.KeysModels = exports.EnginesModels = exports.BlocklistsModels = void 0;
const Blocklists_1 = require("./services/blocklists/Blocklists");
const Engines_1 = require("./services/engines/Engines");
const Keys_1 = require("./services/keys/Keys");
const Quotas_1 = require("./services/quotas/Quotas");
__exportStar(require("./models"), exports);
exports.BlocklistsModels = __importStar(require("./services/blocklists"));
exports.EnginesModels = __importStar(require("./services/engines"));
exports.KeysModels = __importStar(require("./services/keys"));
exports.QuotasModels = __importStar(require("./services/quotas"));
__exportStar(require("./http/errors"), exports);
/**
 * This is the internal API to manage Crowdsec services
 */
class Testsdk {
    constructor({ accessToken = '' }) {
        this.blocklists = new Blocklists_1.BlocklistsService(accessToken);
        this.engines = new Engines_1.EnginesService(accessToken);
        this.keys = new Keys_1.KeysService(accessToken);
        this.quotas = new Quotas_1.QuotasService(accessToken);
    }
    /**
     * Sets the baseUrl that the SDK will use for its requests.
     * @param {string} url
     */
    setBaseUrl(url) {
        this.blocklists.setBaseUrl(url);
        this.engines.setBaseUrl(url);
        this.keys.setBaseUrl(url);
        this.quotas.setBaseUrl(url);
    }
    /**
     * Sets the access token used to authenticate.
     * @param {string} accessToken
     */
    setAccessToken(accessToken) {
        this.blocklists.setAccessToken(accessToken);
        this.engines.setAccessToken(accessToken);
        this.keys.setAccessToken(accessToken);
        this.quotas.setAccessToken(accessToken);
    }
}
exports.Testsdk = Testsdk;
//# sourceMappingURL=index.js.map