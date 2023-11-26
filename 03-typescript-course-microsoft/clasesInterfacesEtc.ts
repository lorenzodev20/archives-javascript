interface Vehicle {
    make: string;
    color: string;
    doors: number;
    accelerate(speed: number): string;
    brake(): string;
    turn(direction: 'left' | 'right'): string;
}

class Car implements Vehicle{
    // Properties
    private static numberOfCars: number = 0;  // New static property
    public make: string;
    public color: string;
    public doors: number;
    public speed: number;

    // Constructor
    constructor(make: string, color: string, doors = 4, speed: number) {
        this.make = make;
        this.color = color;
        this.doors = doors;
        this.speed = speed;
        Car.numberOfCars++; // Increments the value of the static property
    }
    public static getNumberOfCars(): string {
        return `Las cantidad de carros existentes es: ${Car.numberOfCars}`;
    }
    public accelerate(speed: number): string
    {
        return `Hacelera hasta ${speed} Km/h ...\n`;
    }
    public brake():string
    {
        return `Frenos de disco \n`;
    }
    public turn(direction: 'left' | 'right'):string
    {
        return `La dirección es ${direction} \n`;
    }

    public summaryOfCar()
    {
        const title: string = `Summary Of Card \n`;

        const summary: string = `
            ${title}
            ${this.accelerate(this.speed)}
        `;

        console.log(summary);
    }
}

class ElectricCar extends Car {
    // Properties unique to ElectricCar
    private _range: number;
    // Constructor
    // Constructor
    constructor(make: string, color: string, range: number, doors = 2, speed: number) {
        super(make, color, doors, speed);
        this._range = range;
    }
    // Accessors

    // Methods

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
function getArray(items : any[]) : any[] {
    return new Array().concat(items);
}

let numberArray = getArray([5, 10, 15, 20]);
let stringArray = getArray(['Cats', 'Dogs', 'Birds']);
numberArray.push(25);                       // OK
stringArray.push('Rabbits');                // OK
numberArray.push('This is not a number');   // OK
stringArray.push(30);                       // OK
console.log(numberArray);                   // [5, 10, 15, 20, 25, "This is not a number"]
console.log(stringArray);                   // ["Cats", "Dogs", "Birds", "Rabbits", 30]


// Definiendo con tipos Genericos

function getArrayTwo<T>(items : T[]) : T[] {
    return new Array<T>().concat(items);
}

let numberArrayTwo = getArrayTwo<number>([5, 10, 15, 20]);
numberArray.push(25);                      // OK
numberArray.push('This is not a number');  // Generates a compile time type check error

let stringArrayTwo = getArrayTwo<string>(['Cats', 'Dogs', 'Birds']);
stringArray.push('Rabbits');               // OK
stringArray.push(30);                      // Generates a compile time type check error