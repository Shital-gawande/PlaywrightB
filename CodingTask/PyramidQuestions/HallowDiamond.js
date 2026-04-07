let n = 5;

// 1. Upper Triangle
for (let i = 1; i <= n; i++) {
    let line = "";
    // Leading spaces for alignment
    for (let j = 1; j <= n - i; j++) {
        line += " ";
    }
    // Logic for stars vs internal spaces
    for (let k = 1; k <= i; k++) {
        if (k === 1 || k === i) {
            line += "* ";
        } else {
            line += "  "; // Two spaces to match the "* " width
        }
    }
    console.log(line);
}

// 2. Lower Triangle
for (let i = n - 1; i >= 1; i--) {
    let line = "";
    for (let j = 1; j <= n - i; j++) {
        line += " ";
    }
    for (let k = 1; k <= i; k++) {
        if (k === 1 || k === i) {
            line += "* ";
        } else {
            line += "  ";
        }
    }
    console.log(line);
}