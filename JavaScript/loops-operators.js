// ================================
// 1. Operators
// ================================
// console.log("------ Operators Example ------");

let a = 10;

console.log( a === "10");

// // Arithmetic Operators
console.log("Addition:", a + b);         // 15
console.log("Subtraction:", a - b);      // 5
console.log("Multiplication:", a * b);   // 50
console.log("Division:", a / b);         // 2
console.log("Modulus:", a % b);          // 0
console.log("Exponent:", 3 ** 3);        // 100000

// // Comparison Operators
console.log("a > b:", a > b);            // true
console.log("a < b:", a < b);            // false
console.log("a == '10':", a == "10");    // true (loose equality)
console.log("a === '10':", a === "10");  // false (strict equality)

// // Logical Operators
console.log("a > 5 && b < 10:", a > 5 && b < 10); // true
console.log("a > 5 || b > 10:", a > 5 || b > 10); // true
console.log("!(a < b):", !(a < b));               // true

// // Assignment Operators
let x = 10;
// x += 5; // x = x + 5
// console.log("x after += 5:", x); // 15

// // Ternary Operator
// let age = 18;
let vote = (age >= 18) ? "Eligible to Vote" : "Not Eligible";
console.log("Ternary:", vote);
something = (condition ) ? Trueblock : falseblock


// ================================
// 2. Control Statements
// ================================
// console.log("\n------ Control Statements ------");

// // if-else
// let num = -3;
// if (num > 0) {
//     console.log("Positive Number");
// } else if (num < 0) {
//     console.log("Negative Number");
// } else {
//     console.log("Zero");
// }

// // switch
let  Grade = "H";
switch (Grade) {
    case "A": console.log("First rank"); break;
    case "B": console.log("Second rank"); break;
    case "C": console.log("Third rank"); break;
    case "F": console.log("Fail"); break;
    // default: console.log("Invalid Grade");
}


// // ================================
// // 3. Loops
// // ================================
// console.log("\n------ Loops Example ------");

// // for loop
// console.log("For Loop:");
// for (let i = 1; i <= 5; i=i+1) {
//     if (i === 3) continue; // skip 3
//     if (i === 5) break;    // stop at 5
//     console.log(i);
// }

// // while loop
// console.log("\nWhile Loop:");
// let j = 1;
// while (j <= 3) {
//     console.log("j =", j);
//     j++;
// }

// // do-while loop
// console.log("\nDo-While Loop:");
// let k = 1;
// do {
//     console.log("k =", k);
//     k++;
// } while (k <= 3);

// // for...of loop (iterating an array)
// console.log("\nFor...of Loop:");
// let fruits = ["Apple", "Banana", "Mango"];
// for (let i of fruits) {
//     console.log(i);
// }