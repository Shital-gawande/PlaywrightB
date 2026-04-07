class Browser{
    constructor(name){
        this.name = name;
        this.isOpen = true;
        console.log(this.name, "Launched");
    }
    startBrowser(){
        console.log("browser is started", this.name);
    }
    closeBrowser(){
        console.log("browser is closed", this.name);
    }
}

let chrome = new Browser("Chrome");
chrome.startBrowser();
chrome.closeBrowser();  

let firefox = new Browser("Firefox");
firefox.startBrowser();
firefox.closeBrowser();