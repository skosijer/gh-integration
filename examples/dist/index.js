"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const testsdk_1 = require("testsdk");
const sdk = new testsdk_1.Testsdk({ accessToken: process.env.TESTSDK_ACCESS_TOKEN });
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield sdk.blocklists.getBlocklists('organization_id');
        console.log('sss');
        console.log(JSON.stringify(result.data, null, 2));
    }
    catch (err) {
        const error = err;
        console.error(JSON.stringify(error.message));
    }
}))();
