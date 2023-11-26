"use strict";
class Car {
    // Constructor
    constructor(make, color, doors = 4, speed) {
        this.make = make;
        this.color = color;
        this.doors = doors;
        this.speed = speed;
        Car.numberOfCars++; // Increments the value of the static property
    }
    static getNumberOfCars() {
        return `Las cantidad de carros existentes es: ${Car.numberOfCars}`;
    }
    accelerate(speed) {
        return `Hacelera hasta ${speed} Km/h ...\n`;
    }
    brake() {
        return `Frenos de disco \n`;
    }
    turn(direction) {
        return `La dirección es ${direction} \n`;
    }
    summaryOfCar() {
        const title = `Summary Of Card \n`;
        const summary = `
            ${title}
            ${this.accelerate(this.speed)}
        `;
        console.log(summary);
    }
}
// Properties
Car.numberOfCars = 0; // New static property
class ElectricCar extends Car {
    // Constructor
    // Constructor
    constructor(make, color, range, doors = 2, speed) {
        super(make, color, doors, speed);
        this._range = range;
    }
}
// Instantiate the Car object with all parameters
let myCar1 = new Car('Cool Car Company', 'blue', 2, 120);
myCar1.summaryOfCar();
// Instantiates the Car object with all parameters
let myCar2 = new Car('Galaxy Motors', 'blue', 2, 130);
let myCar3 = new Car('Galaxy Motors', 'blue', 3, 90);
// Returns 2
console.log(Car.getNumberOfCars());
// Tipos Genericos
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25); // OK
stringArray.push('Rabbits'); // OK
numberArray.push('This is not a number'); // OK
stringArray.push(30); // OK
console.log(numberArray); // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray); // ["Cats", "Dogs", "Birds", "Rabbits", 30]
// Definiendo con tipos Genericos
function getArrayTwo(items) {
    return new Array().concat(items);
}
let numberArrayTwo = getArrayTwo([5, 10, 15, 20]);
numberArray.push(25); // OK
numberArray.push('This is not a number'); // Generates a compile time type check error
let stringArrayTwo = getArrayTwo(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits'); // OK
stringArray.push(30); // Generates a compile time type check error
