export default class Logger {
    enabled: boolean;
    constructor(enabled: boolean);
    log(...args: any[]): void;
}
