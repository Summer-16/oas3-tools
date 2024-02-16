"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oas3AppOptions = void 0;
const logging_options_1 = require("./logging.options");
class Oas3AppOptions {
    constructor(routingOpts, parserLimit, openApiValidatorOpts, logging, app, cors) {
        this.routing = routingOpts;
        this.parserLimit = parserLimit;
        this.openApiValidator = openApiValidatorOpts;
        if (!logging)
            logging = new logging_options_1.LoggingOptions(null, null);
        this.logging = logging;
        this.app = app;
        this.cors = cors;
    }
}
exports.Oas3AppOptions = Oas3AppOptions;
//# sourceMappingURL=oas3.options.js.map