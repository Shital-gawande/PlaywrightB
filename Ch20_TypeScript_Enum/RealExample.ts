enum Browser{
    Chrome = 'chrome',
    Firefox = 'firefox',
    Safari = 'safari',
    Edge = 'edge'

}

function lauchBrowser(browser: Browser): void{
    switch(browser){
        case Browser.Chrome:
            console.log("Launching Chrome");
            break;
        case Browser.Edge:
            console.log("Launching Edge");
            break;
        case Browser.Firefox:
            console.log("Launching Firefox");
            break;
        case Browser.Safari:
            console.log("Launching Safari");
            break;
    }
}
lauchBrowser(Browser.Chrome);
lauchBrowser(Browser.Edge);