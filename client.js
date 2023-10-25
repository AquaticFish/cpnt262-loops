// First pattern
const y1 = 5;
const x1 = 5;
let str1 = "";

for (let i = 1; i < y1; i++) {
    for (let j = 1; j < x1; j++) {
        if (i <= j) {
            str1 = str1.concat("*");
        } else {
            str1 = str1.concat(" ");
        }
    }
    str1 = str1.concat("\n");
}

console.log("Pattern 1:");
console.log(str1);

// Second pattern
const y2 = 5;
const x2 = 5;
const rows = [];

for (let i = 1; i < y2; i++) {
    let row = "";
    for (let j = 1; j < x2; j++) {
        if (i <= j) {
            row = row.concat("*");
        } else {
            row = row.concat(" ");
        }
    }
    rows.push(row);
}

console.log("\nPattern 2 (Reversed):");
rows.reverse().forEach(row => console.log(row));

// Third pattern
const height = 5;
console.log("\nPattern 3:");
for (let i = 0; i < height; i++) {
    let row = "";
    // Spaces before the stars
    for (let j = 0; j < height - i - 1; j++) {
        row += " ";
    }
    // Stars
    for (let k = 0; k < 2 * i + 1; k++) {
        row += "*";
    }
    console.log(row);
}

for (let i = height - 2; i >= 0; i--) {
    let row = "";
    // Spaces before the stars
    for (let j = 0; j < height - i - 1; j++) {
        row += " ";
    }
    // Stars
    for (let k = 0; k < 2 * i + 1; k++) {
        row += "*";
    }
    console.log(row);
}

