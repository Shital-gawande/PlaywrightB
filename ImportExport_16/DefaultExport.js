// default export only one export per file

export default function toStringUpperCase(str){
    return str.toUpperCase();
}

export default function toLowerString(str){ // only one export per file, this won't work
    str.toLowerCase();
}

