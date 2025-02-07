'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
exports.expressAppConfig = expressAppConfig;
const express_app_config_1 = require("./middleware/express.app.config");
function expressAppConfig(definitionPath, appOptions, customMiddlewares, // This is the custom middleware that we want to pass to the ExpressAppConfig
responseMiddleware // This is the custom middleware that we want to pass to the ExpressAppConfig, we put them prior to validator middleware so they can modify the response if needed.
) {
    return new express_app_config_1.ExpressAppConfig(definitionPath, appOptions, customMiddlewares, responseMiddleware);
}
//# sourceMappingURL=index.js.map