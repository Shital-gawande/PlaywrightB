const environment = "QA";

let base_URL = "", API_key = "";
let pattern ="",  timeout = "";

switch(environment){

    case "QA":
        base_URL = " https://qa-api.testingacademy.com";
        API_key = "qa_key_xxxx-xxxx";
        timeout = "5000ms";
        console.log(`Environment: ${environment} Base URL:${base_URL} API Key: ${API_key} Timeout: ${timeout} Description: QA - Testing `);
        break;
    case "staging":
        base_URL = " https://staging-api.testingacademy.com";
        API_key = "stg_key_xxxx-xxxx";
        timeout = "8000ms";
        console.log(`Environment: ${environment} Base URL:${base_URL} API Key: ${API_key} Timeout: ${timeout} Description: Staging - Pre-production mirror`);
        break;
    case "prod":
        base_URL = " https://prod-api.testingacademy.com";
        API_key = "prod_key_xxxx-xxxx";
        timeout = "6000ms";
        console.log(`Environment: ${environment} Base URL:${base_URL} API Key: ${API_key} Timeout: ${timeout} Description: Prod - production environment`);
        break;
    default:
        console.print("Enter valid Environment");

}
