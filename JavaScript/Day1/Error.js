// ==============================
// Example 1: JSON Parsing Error
// ==============================

// console.log("=== Example 1: JSON Parsing Error ===");

const jsonString = '{ "name": "Pavan", "age": 21 }'; // Invalid JSON (missing quotes around 'age')
try {
  const user = JSON.parse(jsonString); // This will throw an error
  console.log("code is executed");
} catch (error) {   
  console.log("nuvu code correct ga type chey rahh babuuu");
  console.log("Message:", error.message);
}
console.log("\n"); 

// ===========================================
// Example 2: Throwing and Catching Custom Error
// ===========================================

// console.log("=== Example 2: Throwing Custom Error ===");

function checkNumber(num) {
  try {
    if (num < 0) {
      throw new Error("Number must be non-negative");
    }
    console.log("✅ Number is:", num);
  } catch (error) {
    console.log("❌ Error:", error.message);
  }
  finally {
    console.log("Operation is done")
  }
}  checkNumber(5);    // ✅ Should log the number
checkNumber(-3);   // ❌ Should throw and catch the error

// console.log("\n");

// ====================================
// Example 3: Using try...catch...finally
// ====================================

// console.log("=== Example 3: try...catch...finally ===");

// function divideNumbers(a, b) {
//   try {
//     if (b === 0) {
//       throw new Error("Cannot divide by zero");
//     }
//     let result = a / b;
//     console.log(`✅ Result: ${result}`);
//   } catch (error) {
//     console.log("❌ Division error:", error.message);
//   } finally {
//     console.log("🔁 Operation complete (success or fail)");
//   }
// }

// divideNumbers(10, 2);   // ✅ Should print result
// divideNumbers(10, 0);   // ❌ Should throw and catch error

// console.log("\n");

// ==============================
// Example 4: Error in Async/Await
// ==============================

// console.log("=== Example 4: Error Handling with async/await ===");

// async function fetchData(url) {
//   try {
//     // Simulate fetch with a bad URL (fake example for beginners)
//     throw new Error("Failed to fetch data from " + url);
//   } catch (error) {
//     console.log("❌ Async error:", error.message);
//   }
// }

// // Call the async function
// fetchData("https://fakeapi.com/data");
