// class salaar {
//     released() {
//         console.log('The Cease Fire');
//     }
// }
// class salaar2 extends salaar {
//     notreleased() {
//         console.log('Shouryangaparvam yet be released');
//     }
// }
// const movie = new salaar2();
// movie.released();      // The Cease Fire
// movie.notreleased();   // Shouryangaprvam Loading


// Base Class (First Movie Part)
// class Pushpa {
//     constructor(name, releaseYear, villain, tagline) {
//         this.name = name;
//         this.releaseYear = releaseYear;
//         this.villain = villain;
//         this.tagline = tagline; // Movie tagline
//     }

//     // Method to display basic movie information
//     displayInfo() {
//         console.log(`${this.name} - Year of Release: ${this.releaseYear}`);
//         console.log(`Villain: ${this.villain}`);
//         console.log(`Tagline: ${this.tagline}`);
//     }
// }

// // Derived Class (Second Movie Part)
// class Pushpa2 extends Pushpa {
//     constructor(name, releaseYear, villain) {
//         super(name, releaseYear, villain, 'The Rise'); // Pushpa2 tagline
//     }

//     // Method to display additional info specific to Pushpa 2
//     displayInfo() {
//         super.displayInfo(); // Calls displayInfo() from Pushpa class
//     }
// }

// // Derived Class (Third Movie Part)
// class Pushpa3 extends Pushpa2 {
//     constructor(name, releaseYear, villain) {
//         super(name, releaseYear, villain, 'The Rampage'); // Pushpa3 tagline
//     }

//     // Method to display additional info specific to Pushpa 3
//     displayInfo() {
//         super.displayInfo(); // Calls displayInfo() from Pushpa2 class
//     }
// }

// // Creating instances for each part of the movie
// const pushpa1 = new Pushpa('Pushpa', 2021, 'Shekhawat', 'The Rule');
// const pushpa2 = new Pushpa2('Pushpa 2', 2024, 'Bugga Reddy');
// const pushpa3 = new Pushpa3('Pushpa 3', 2026, 'Jagapathi Babu');

// // Displaying info for each part
// console.log('-------------------');
// pushpa1.displayInfo();   // For Pushpa 1
// console.log('-------------------');
// pushpa2.displayInfo();   // For Pushpa 2
// console.log('-------------------');
// pushpa3.displayInfo();   // For Pushpa 3

// Base Class
class Pushpa {
    constructor(name, releaseYear, villain, tagline) {
        this.name = name;
        this.releaseYear = releaseYear;
        this.villain = villain;
        this.tagline = tagline;
    }

    // Method to display movie details
    displayInfo() {
        console.log(`${this.name} - Year of Release: ${this.releaseYear}`);
        console.log(`Villain: ${this.villain}`);
        console.log(`Tagline: ${this.tagline}`);
    }
}

// First level derived class (Pushpa 2)
class Pushpa2 extends Pushpa {
    constructor(name, releaseYear, villain) {
        super(name, releaseYear, villain, 'The Rise');
    }
}

// Second level derived class (Pushpa 3)
class Pushpa3 extends Pushpa2 {
    constructor(name, releaseYear, villain) {
        super(name, releaseYear, villain);
        this.tagline = 'The Rampage'; // Override tagline
    }
}

// Creating instances for each part of the movie
const pushpa1 = new Pushpa('Pushpa', 2021, 'Shekhawat', 'The Rule');
const pushpa2 = new Pushpa2('Pushpa 2', 2024, 'Bugga Reddy');
const pushpa3 = new Pushpa3('Pushpa 3', 2026, 'Jagapathi Babu');

// Displaying information
console.log('-------------------');
pushpa1.displayInfo();   // Pushpa 1
console.log('-------------------');
pushpa2.displayInfo();   // Pushpa 2
console.log('-------------------');
pushpa3.displayInfo();   // Pushpa 3



// Base Class
// class Vehicle {
//     startEngine() {
//         console.log('Vehicle Started');
//     }
// }

// // First Level Derived Class
// class Car extends Vehicle {
//     constructor(name) {
//         super(); // Calls Vehicle's constructor
//         this.name = name;
//     }

//     drive() {
//         this.startEngine(); // Inherited method from Vehicle
//         console.log('It is a Four wheeler Vehicle');
//     }
// }
 
// // Second Level Derived Class
// class SportsCar extends Car {
//     constructor(name, brand) {
//         super(name); // Calls Car's constructor
//         this.brand = brand;
//     }

//     // Override the drive method
//     drive() {
//         super.drive(); // Calls Car's drive method
//         console.log('It goes very fast');
//     }
// }

// // Creating an instance of SportsCar
// const sport_car = new SportsCar('F1', 'Ferrari');

// // Call the drive method
// sport_car.drive();
