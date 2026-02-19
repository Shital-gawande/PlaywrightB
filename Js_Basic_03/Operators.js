console.log(null==undefined); // Output: true
console.log(null===undefined); // Output: false

console.log(null===0);
console.log(null==="");
console.log(null===false);
console.log(undefined==="");
console.log(undefined===0);
console.log(undefined==="");
console.log(undefined===false);

// == is a loose equality operator that performs type coercion means js will make data type of both operands the same, 
// while === is a strict equality operator that does not perform type coercion. Therefore, null and undefined are considered equal with == but not with ===.