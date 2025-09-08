// function phone(){ // decleration

// }
// phone(); // function call
// hello(); // function call

// Variable
// function pavan(){
//     console.log("Named Function")

// }
// function (){
//     console.log("unamed function")
// }
// let srinivaspavan = function() {
//   console.log( "Unamed function" );
// };
// srinivaspavan();



// Local variables
// let message=" global"
// function inside() {
//   let global = "welcome to " + message; // local variable
//   console.log( global );
// }
// inside(); 
// let message=" welcome to outside"
// console.log( message ); // <-- Error! The variable is local to the function




// Outer variables


// let dept = 'cse dept';
// function showMessage() {
//   let message = 'welcome to  ' + dept;
//   console.log(message);
// }
// showMessage(); // wecome to cse dept


// function with parameters


// function greetUser(name, Day) {
//   console.log("Hello, " + name + " Happy " + Day);
// }
// greetUser("Rajesh"); // Output: Hello, Pavan


// function birthday_greet(name){ // name is parameter
//     // alert(`Happy birthday ${name}`);
//     console.log(`Happy birthday ${name}`);
// }

// birthday_greet('eswar'); // value is argument

// function birthday_greet(name,age){ // name is parameter
//     // alert(`Happy birthday ${name}`);
//     console.log(`Happy birthday ${name}`);
// }

// birthday_greet('20'); // value is argument

// function birthday_greet(name,age){ // name is parameter
//     // alert(`Happy birthday ${name}`);
//     console.log(`Happy birthday ${name}`);
// }

// birthday_greet('eswar'); // giving only single value is argument 

// return
// function sum(a,b){
//     console.log(a+b);
//     console.log('before return');
//     console.log('returning the value');
//     return a*b;
//     console.log('after return');
//     console.log(a-b);
//     console.log('returning the value');
// }
// console.log(sum(10,20));



// // function expressions
// const sub = function(a,b){
//     return a-b;
// }

// console.log(sub(50,25));

// // to declare variables we are using let,const
// // in older version of js we have a keyword called var
// function testVar(){
//     if(true){
//         var x = 20;
//     }
//     console.log(x)
// }

// testVar();

// function testLet(){
//     if(true){
//         let x = 20;
//     }
//     console.log(x)
// }

// // testLet();

// // Arrow Functions
// const mul = (a,b) => {
//     return a*b;
// }
// console.log(mul(10,10));

//normal function
let Add1= function(a,b){
    console.log(a+b);
}
Add1(10,10);

// arrow function
let add = (a,b) => a+b;
console.log(add(10,20));
// const divis = (a,b) => a/b;
// console.log(divis(100,10));

const sqare = x => x*x;
console.log(sqare(4)); 
function function1(name,call){
    console.log("Hello Boyyy " +name);
    console.log(call(name));
}
const function2 = name => "Hello " +name;
const function3 = name => "GoodBye " +name;
function1('Srinivaspavan ',function2); 
function1('Pavan Bitra ',function3);







// Local variables
// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable

//   console.log( message );
// }

// showMessage(); // Hello, I'm JavaScript!

// console.log( message ); // <-- Error! The variable is local to the function




// Outer variables


// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   console.log(message);
// }

// showMessage(); // Hello, John


// function srinivaspavan(){
//   console.log("teach the classes")
//   a=10;
//   b=20;
//   c=a+b;
// }
