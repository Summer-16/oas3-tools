import { OpenApiValidatorOpts } from 'express-openapi-validator/dist/framework/types';
import { LoggingOptions } from './logging.options';
import { SwaggerUiOptions } from './swagger.ui.options';
import * as express from 'express';
export declare class Oas3AppOptions {
    routing: any;
    parserLimit: string;
    openApiValidator: OpenApiValidatorOpts;
    logging: LoggingOptions;
    swaggerUI: SwaggerUiOptions;
    app: express.Application;
    cors: any;
    constructor(routingOpts: any, parserLimit: any, openApiValidatorOpts: OpenApiValidatorOpts, logging: LoggingOptions, swaggerUI: SwaggerUiOptions, app: express.Application, cors: any);
}
