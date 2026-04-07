
//import { userName, getUserName } from "./namedExport.js";
//import { userName, getUserName } from "./namedExport.js"; 
// we can't import the same name prop from multiple files,use alias to avoid the conflict

import { userName as un, getUserName as getUN } from "./namedExport.js"; 
import { userName as un1, getUserName as getUn1} from "./namedExport2.js";

console.log("User Name is : ", un);
getUN();

console.log("User Name is : ", un1);
getUn1();