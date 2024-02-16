'use strict';
import { ExpressAppConfig } from "./middleware/express.app.config";
import { Oas3AppOptions } from "./middleware/oas3.options";
import { OpenApiRequestHandler } from 'express-openapi-validator/dist/framework/types';

export function expressAppConfig(
  definitionPath: string,
  appOptions: Oas3AppOptions,
  customMiddlewares?: OpenApiRequestHandler[], // This is the custom middleware that we want to pass to the ExpressAppConfig
  responseMiddleware?: OpenApiRequestHandler[] // This is the custom middleware that we want to pass to the ExpressAppConfig, we put them prior to validator middleware so they can modify the response if needed.
): ExpressAppConfig {
  return new ExpressAppConfig(definitionPath, appOptions, customMiddlewares, responseMiddleware);
}
