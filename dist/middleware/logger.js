"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Logger {
    constructor(enabled) {
        this.enabled = enabled;
    }
    log(...args) {
        if (this.enabled) {
            console.log(...args);
        }
    }
}
exports.default = Logger;
//# sourceMappingURL=logger.js.map