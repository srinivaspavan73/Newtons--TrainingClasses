// // // creating an array


// let CSE = new Array('Pavan','KITS','21JR1A4441', 8,21);
// let CSM= [];
// Define 
// let student = ['Pavan','KITS','21JR1A4441', 8,21,true]
// Access
// console.log(student);
// console.log(student[-1]);
// console.log(student[1]);
// console.log(student[9]); 
// let student2 = [...student]
// console.log(student2)
 
// Insert
// student[6] = 'Guntur';
// console.log(student);
let student = ['Pavan','KITS','21JR1A4441', 8,21,true]
// console.log(student.at(-4));
// // Slice an Array
// console.log( student.slice(1, 3) ); //  (copy from 1 to 3)
// console.log( student.slice(-2) ); // (copy from -2 till the end)



// Delete an element in array

// let arr = ["I", "go", "home"];
// delete student[0]; // remove "go"
// console.log(student)
// console.log( arr[1] ); // undefined

// // now arr = ["I",  , "home"];
// console.log( arr.length ); // 3


// Deletion of elements in array:
// let arr = ["I", "study", "JavaScript"];
// arr.splice(1, 1);// from index 1 remove 1 element
// console.log( arr ); // ["I", "JavaScript"]





// Add Array Element add the end using concat
// let arr = [1,2];
// console.log( arr.concat([3, 4]) ); // 1,2,3,4



// Insert at specified index
// let arr = [1, 2, 3, 4, 5];
// arr.splice(2, 0, 99); // Insert the element 99 at index 2
// console.log(arr);  // Output: [1, 2, 99, 3, 4, 5]




//  Length Property
// let fruits = ['apple','orange','pears']
// console.log(fruits.length);




//  at() Method
// let fruits = ['apple','orange','pears']
// console.log(fruits.at(0));
// console.log(fruits.at(1));  
// console.log(fruits.at(2));


// Arrays Hold Any Data Type

// let arr = [
//   "Apple",
//   { name: "John" },
//   true,
//   function () { console.log("hello"); }
// ];

// console.log(arr[1].name); // John 
// arr[3]();                 // Calls function: hello


// push,pop,shift,unshift
// let fruits = ['apple','orange','pears']

// fruits.push('Mango');
// console.log(fruits);
// fruits.pop()
// console.log(fruits); 

// fruits.unshift('Mango');
// console.log(fruits); 
// fruits.shift();
// console.log(fruits);



// // looping in array
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// console.log('-------------------------');
// let numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
// for (let y of numbers) {
//     console.log(y)
// }

// console.log('-------------------------');
// for (let n in numbers) {
//     console.log(numbers[n]);
// }


// For Each example 1

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function(number) {
//     console.log(number);
// });

// Example2
// let numbers = [10, 20, 30];

// numbers.forEach((value, index, arr) => {
//     arr[index] = value * 2;
// });

// console.log(numbers); // Output: [20, 40, 60]


// example 3
// products = ['Smartphone','Telivision','Laptop'];
// products.forEach((prod,indx) => {
//     console.log(`Index ${indx}: ${prod}`);
// });



// find
// let pavan = [10,20,30,40,50,60];
// const val1 = pavan.find(num => num<40);
// const val2 = pavan.filter(num => num<40);
// const val3 = pavan.map(num => num<40);

// console.log(val);
// filter
// let numbers2 = [10,20,30,40,50,60];
// const val2 = numbers2.filter(num => num<40);
// console.log(val2);
// map
// let numbers3 = [10,20,30,40,50,60];
// const square_numbers = numbers3.map(num=> num+40);
// console.log(square_numbers);


// reduce example 1
// Syntax
// array.reduce(callback(accumulator, currentValue, index, array), initialValue)

// const prices = [5, 30, 10, 25, 15, 20];
// const total = prices.reduce(hhh);
// console.log(`${total}`);
// // console.log(total);
// function hhh(accumulator, element){
//     return accumulator + element;
// }

// reduce example 2
// let numbers2 = [10,20,30,40,50,60];
// const sumOfNumbers = numbers2.reduce((sum,num)=>sum+num,0);
// console.log(sumOfNumbers);
// const mulOfNumbers = numbers2.reduce((mul,num)=>mul*num,1);
// console.log(mulOfNumbers);

// Spread operator [...]
// copy array
// let arr1 = [1,2,3,4];
// let arr2 = [...arr1];
// console.log(arr2);

// //adding values
// const arr3 = [100,200]
// const arr4 = [...arr3,300,400]
// console.log(arr4);

// // merging arrays
// const arr5 = [...arr3,...arr4];
// console.log(arr5);

