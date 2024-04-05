'use strict';

import * as express from 'express';
import cookieParser = require('cookie-parser');
import cors = require('cors');
const helmet = require("helmet");
import { initSwaggerDocs } from './swagger.ui';
import { SwaggerRouter } from './swagger.router';
import { SwaggerParameters } from './swagger.parameters';
import * as logger from 'morgan';
import * as OpenApiValidator from 'express-openapi-validator';
import { Oas3AppOptions } from './oas3.options';
import { OpenApiRequestHandler } from 'express-openapi-validator/dist/framework/types';

export class ExpressAppConfig {
    private app: express.Application;
    private routingOptions;
    private parserLimit;
    private definitionPath;
    private openApiValidatorOptions;
    private internalLogs;

    constructor(definitionPath: string, appOptions: Oas3AppOptions, customMiddlewares?: OpenApiRequestHandler[], responseMiddleware?: OpenApiRequestHandler[]) {
        this.definitionPath = definitionPath;
        this.routingOptions = appOptions.routing;
        this.parserLimit = appOptions.parserLimit || '1mb';
        this.internalLogs = appOptions.internalLogs === false ? false : true;
        this.setOpenApiValidatorOptions(definitionPath, appOptions);
        // Create new express app only if not passed by options
        this.app = appOptions.app || express();
        this.app.use(helmet());
        // Enable CORS
        if (appOptions?.cors) {
            this.app.use(cors(appOptions.cors));
        }
        // Configure parsing middleware
        this.app.use(express.json({ limit: this.parserLimit }));
        this.app.use(express.urlencoded({ limit: this.parserLimit, extended: true }));
        this.app.use(express.text({ limit: this.parserLimit }));
        this.app.use(express.raw({ type: 'application/pdf' }));
        this.app.use(express.raw({ type: 'application/octet-stream' }));
        this.app.use(cookieParser());
        // Configure logging middleware
        if (appOptions?.logging) {
            this.app.use(this.configureLogger(appOptions.logging));
        }
        // Initialize swagger docs
        initSwaggerDocs(this.app, this.definitionPath);
        // Bind custom middlewares which need access to the OpenApiRequest context before validator initialization
        (responseMiddleware || []).forEach(middleware => this.app.use(middleware));
        // Initialize OpenAPI validator
        this.app.use(OpenApiValidator.middleware(this.openApiValidatorOptions));
        this.app.use(new SwaggerParameters().checkParameters());
        // Bind custom middlewares which need access to the OpenApiRequest context before controllers initialization
        (customMiddlewares || []).forEach(middleware => this.app.use(middleware));
        this.app.use(new SwaggerRouter({ internalLogs: this.internalLogs }).initialize(this.routingOptions));
        this.app.use(this.errorHandler);
    }

    private setOpenApiValidatorOptions(definitionPath: string, appOptions: Oas3AppOptions) {
        //If no options or no openApiValidator Options given, create empty options with api definition path
        if (!appOptions || !appOptions.openApiValidator) {
            this.openApiValidatorOptions = { apiSpec: definitionPath };
            return;
        }
        // use the given options
        this.openApiValidatorOptions = appOptions.openApiValidator;
        // Override apiSpec with definition Path to keep the prior behavior
        this.openApiValidatorOptions.apiSpec = definitionPath;
    }

    public configureLogger(loggerOptions) {
        let format = 'dev';
        let options: {} = {};

        if (loggerOptions != undefined) {
            if (loggerOptions.format != undefined
                && typeof loggerOptions.format === 'string') {
                format = loggerOptions.format;
            }

            if (loggerOptions.errorLimit != undefined
                && (typeof loggerOptions.errorLimit === 'string' || typeof loggerOptions.errorLimit === 'number')) {
                options['skip'] = function (req, res) { return res.statusCode < parseInt(loggerOptions.errorLimit); };
            }
        }

        return logger(format, options);
    }

    private errorHandler(error, request, response, next) {
        response.status(error.status || 500).json({
            message: error.message,
            errors: error.errors,
        });
    }

    public getApp(): express.Application {
        return this.app;
    }
}
