let element: unknown = {
    tagName: "Button",
    textContent: "Submit",
    id: "Submit-btn",
    disabled: false
}

interface elementI {
    tagName: string,
    textContent: string,
    id: string,
    disabled: boolean
}
let button = element as elementI;

console.log("Tag", button.tagName);
console.log("Text",button.textContent);
console.log("id:",button.id);
console.log("Disbaled status", button.disabled);