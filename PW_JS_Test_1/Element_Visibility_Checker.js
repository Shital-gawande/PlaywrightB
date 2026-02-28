 isPresent = true, isDisplayed = true, isEnabled = false;

 if(isPresent ===true && isDisplayed === true && isEnabled === true){
    console.log("Status: Ready");
 }
 else if(isPresent === true && isDisplayed === true && isEnabled === false){
    console.log("Status: DISABLED Severity: WARNING Action: Element is visible but disabled. Wait for enable state or check preconditions.");
 }
 