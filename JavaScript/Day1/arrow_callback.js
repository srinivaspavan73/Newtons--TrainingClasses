function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Srinivas", sayGoodbye);

const add = (a, b) => a + b;
console.log(add(5, 3)); // Output: 8

function processArray(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

processArray([1, 2, 3], function(item) {
    console.log("Item:", item);
});

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

function fetchData(callback) {
    setTimeout(() => {
        callback("Data loaded!");
    }, 1000);
}

fetchData(result => {
    console.log(result);
});