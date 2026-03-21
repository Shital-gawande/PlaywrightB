// describes the object
const user = {name1:"shital",age:56};

console.log(Object.getOwnPropertyDescriptor(user,"age"));// describes the property as { value: 56, writable: true, enumerable: true, configurable: true }