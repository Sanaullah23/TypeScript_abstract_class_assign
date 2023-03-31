abstract class Vehicle {
    make: string;
    model: string;
    year: number;
    rented: boolean;

    constructor(make: string, model: string, year: number, rented: boolean) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }

    getMake(): string {
        return this.make;
    }

    getModel(): string {
        return this.model;
    }

    getYear(): number {
        return this.year;
    }

    isRented(): boolean {
        return this.rented;
    }

    setRented(rented: boolean): void {
        this.rented = rented;
    }

    abstract rentalRate(): number;

    rent(): void {
        if (this.rented) {
            console.log(`Sorry, this ${this.make} ${this.model} is already rented.`);
        } else {
            this.rented = true;
            console.log(`You have rented the ${this.make} ${this.model}.`);
        }
    }

    return(): void {
        if (this.rented) {
            this.rented = false;
            console.log(`Thank you for returning the ${this.make} ${this.model}.`);
        } else {
            console.log(`This ${this.make} ${this.model} is not rented.`);
        }
    }
}

class Car extends Vehicle {
    numDoors: number;
    numSeats: number;

    constructor(make: string, model: string, year: number, rented: boolean, numDoors: number, numSeats: number) {
        super(make, model, year, rented);
        this.numDoors = numDoors;
        this.numSeats = numSeats;
    }

    rentalRate(): number {
        return 50;
    }

    getNumDoors(): number {
        return this.numDoors;
    }

    getNumSeats(): number {
        return this.numSeats;
    }
}

class Truck extends Vehicle {
    payloadCapacity: number;

    constructor(make: string, model: string, year: number, rented: boolean, payloadCapacity: number) {
        super(make, model, year, rented);
        this.payloadCapacity = payloadCapacity;
    }

    rentalRate(): number {
        return 100;
    }

    getPayloadCapacity(): number {
        return this.payloadCapacity;
    }
}

class Motorcycle extends Vehicle {
    engineSize: number;

    constructor(make: string, model: string, year: number, rented: boolean, engineSize: number) {
        super(make, model, year, rented);
        this.engineSize = engineSize;
    }

    rentalRate(): number {
        return 25;
    }

    getEngineSize(): number {
        return this.engineSize;
    }
}


const car = new Car('Toyota', 'Corolla', 2020, false, 4, 5);
car.rent(); 
console.log(car.isRented()); 
console.log(car.rentalRate()); 
car.return(); 
console.log(car.isRented()); 

const truck = new Truck('Ford', 'F-150', 2018, true, 2000);
truck.rent(); 
console.log(truck.isRented()); 
console.log(truck.rentalRate()); 
truck.return();
