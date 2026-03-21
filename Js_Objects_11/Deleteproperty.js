let config = {}; // creating blank object
config.browser = "Chrome";
config.timeout = 3000;
config.timeout = 5000; // latest if we add duplicates it will take latest value
console.log(config);
delete config.browser;
console.log(config);