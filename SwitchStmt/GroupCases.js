// grouping cases

let browser = "Chrome";

switch(browser){

    case "Chrome":
    case "Edge":
    case "Brave":
        console.log("chromium project");
    case "FireFox":
        console.log("Mozilla Project");
    default:
        console.log("No browser found");
}