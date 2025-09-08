// object literal
// let user = new Object();
// let user1 = {}

// let person = {
//   name: "Pavan Kumar",
//   age:21 ,
//   work: function(a,b) {
//     return a+b;  
//   }
// };
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// person.work(10,20);

// new Object()
// const car = new Object();
// car.car_name = "Honda";
// car.start = function(){
//     console.log('Honda car started');
// }

// console.log(car.car_name);
// car.start();
// console.log(typeof car);

// properties
// const car = {
//     car_name : "Maruti",
//     brand : "Swift"
// }

// console.log(car.car_name);
// console.log(car.brand);


// methods
// const car = {
//     greenbuton : function() {
//         alert("Car is Started");
//     },
//     redbutton : function(){
//         alert("Car is Stopped");
//     }
// }
// car.greenbuton();
// car.redbutton();





// this
// const student = {
//     student_name : "ravi",
//     s_id : "420",
//     display_info : function(){
//         // console.log(`${student.student_name} id is ${student.s_id}`);
//         console.log(`${this.student_name} id is ${this.s_id}`);

//     }
// }
// student.display_info();

// console.log(this); 
// we aren't using in obj,that's why its showing window

// Object destructing
// const user = {
//   name: "Jane",
//   age: 25,
//   country: "India"
// };
// const { name, age } = user;
// console.log(name); // Jane
// console.log(age);  // 25

const person = {
  name:"kesav",
  age:25
}
// console.log(person.name)
let name1 = person.name;
let age1 = person.age;
// let {name,age} = person;
console.log(name1);
// console.log(age);

// CONSTRUCTOR FUNCTIONS

