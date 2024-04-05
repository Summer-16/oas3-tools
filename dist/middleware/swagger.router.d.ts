export declare class SwaggerRouter {
    logger: any;
    constructor({ internalLogs }: {
        internalLogs: any;
    });
    handlerCacheFromDir(dirOrDirs: any): object;
    initialize(options: any): (req: any, res: any, next: any) => any;
}
