import { OpenApiValidatorOpts } from 'express-openapi-validator/dist/framework/types';
import { LoggingOptions } from './logging.options';
import * as express from 'express';

export class Oas3AppOptions {
    public routing: any;
    public parserLimit: string;
    public openApiValidator: OpenApiValidatorOpts;
    public logging: LoggingOptions;
    public app: express.Application;
    public cors: any;

    constructor(routingOpts: any, parserLimit: any, openApiValidatorOpts: OpenApiValidatorOpts, logging: LoggingOptions, app: express.Application, cors: any) {
        this.routing = routingOpts;
        this.parserLimit = parserLimit;
        this.openApiValidator = openApiValidatorOpts;
        if (!logging)
            logging = new LoggingOptions(null, null);
        this.logging = logging;
        this.app = app;
        this.cors = cors;
    }
}