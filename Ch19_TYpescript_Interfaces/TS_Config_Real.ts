interface TestConfig{
    browser: string,
    headless: boolean,
    baseURL: string,
    timeout?: number,
    retries?: number
}

let CIConfig: TestConfig = {
    browser : "chrome",
    headless: true,
    baseURL: "https://staging.app.com"
}

let LocalConfig: TestConfig={
    browser: "FireFox",
    headless: false,
    baseURL: "http://localhost:3000",
    timeout: 10000,
    retries: 2
}

console.log("CI:", CIConfig.browser, "| timeout:", CIConfig.timeout);
console.log("Local:", LocalConfig.browser, "| timeout:", LocalConfig.timeout);