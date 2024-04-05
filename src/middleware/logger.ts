export default class Logger {
  public enabled: boolean;

  constructor(enabled: boolean) {
    this.enabled = enabled;
  }

  log(...args: any[]) {
    if (this.enabled) {
      console.log(...args);
    }
  }
}
