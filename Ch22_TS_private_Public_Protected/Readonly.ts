class PlaywrightConfig{
    readonly baseURL: string;
    readonly timeout: number;
    readonly retry: number;
    constructor(baseUrrl: string, timeout: number, retry: number){
        this.baseURL = baseUrrl;
        this.retry = retry;
        this.timeout = timeout;
    }
    showConfig(): void {
        console.log("BaseURL: " +this.baseURL);
        console.log("Retry: "+this.retry);
        console.log("Timeout: "+this.timeout+"ms");
    }
}

let config = new PlaywrightConfig("https://staging.app.com",50000,3);
config.showConfig();

// config.baseURL = ""; shows error-Cannot assign to 'baseURL' because it is a read-only property