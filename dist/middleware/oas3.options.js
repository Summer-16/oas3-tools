"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oas3AppOptions = void 0;
class Oas3AppOptions {
    constructor(routingOpts, parserLimit, openApiValidatorOpts, logging, app, cors, internalLogs) {
        this.routing = routingOpts;
        this.parserLimit = parserLimit;
        this.openApiValidator = openApiValidatorOpts;
        this.logging = logging;
        this.app = app;
        this.cors = cors;
        this.internalLogs = internalLogs;
    }
}
exports.Oas3AppOptions = Oas3AppOptions;
//# sourceMappingURL=oas3.options.js.map