// // =========================
// // 1. var Example
// // =========================
// // console.log("------ var Example ------");
// // var x = 10;
// // console.log(x); // 10

// // var x = 20;  // Re-declaration allowed
// // console.log("Re-declared x:", x); // 20

// // x = 30;  // Re-assignment allowed
// // console.log("Re-assigned x:", x); // 30

// // if (true) {
// //     var x = 40;  // var is function-scoped (not block-scoped)
// //     console.log("Inside block (var):", x); // 40
// // }
// // console.log("Outside block (var):", x); // 40


// // // =========================
// // // 2. let Example
// // // =========================
// // console.log("\n------ let Example ------");
// // let y = 10;
// // console.log("Initial y:", y); // 10

// // let y = 20;  // ❌ ERROR: Re-declaration not allowed in same scope
// // console.log(y)
// // y = 20;        // ✅ Re-assignment allowed
// // console.log("Re-assigned y:", y); // 20

// // if (true) {
// //     let y = 30;  // let is block-scoped
// //     console.log("Inside block (let):", y); // 30
// // }
// // console.log("Outside block (let):", y); // 20


// // // =========================
// // // 3. const Example
// // // =========================
// // console.log("\n------ const Example ------");
// const z = 10;
// console.log("Initial z:", z); // 10

// z = 20;        // ❌ ERROR: Re-assignment not allowed
// const z = 30;  // ❌ ERROR: Re-declaration not allowed

// // if (true) {
// //     const z = 40;  // const is block-scoped
// //     console.log("Inside block (const):", z); // 40
// // }
// // console.log("Outside block (const):", z); // 10


// // // =========================
// // // 4. Hoisting Example
// // // =========================
// // console.log("\n------ Hoisting Example ------");
// // console.log(a); // ✅ undefined (var is hoisted)
// // var a = 100;

// // // console.log(b); // ❌ ERROR: Cannot access 'b' before initialization
// // let b = 200;

// // // console.log(c); // ❌ ERROR: Cannot access 'c' before initialization
// // const c = 300;
