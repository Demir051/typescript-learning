interface Point {
    x: number,
    y: number
}

interface Passenger {
    name: string,
    phone: string
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
    getDistance(pointA: Point, pointB: Point): number;
    addPassenger(passenger: Passenger): void;
    removePassenger(passenger: Passenger): void;
}

class Taxi implements Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Taxi travels to ${point.x} and ${point.y}`);
    }
    getDistance(pointA: Point, pointB: Point): number {
        return 1000;
    }
    addPassenger(passenger: Passenger): void {
        console.log(`${passenger.name} is added to the passenger list`);
    }
    removePassenger(passenger: Passenger): void {
        console.log(`${passenger.name} is removed from the passenger list`);
    }
}
    
class Bus implements Vehicle {
    currentLocation: Point;

    travelTo(point: Point): void {
        console.log(`Bus travels to ${point.x} and ${point.y}`);
    }

    getDistance(pointA: Point, pointB: Point): number {
        return 500;
    }

    addPassenger(passenger: Passenger): void {
        console.log(`${passenger.name} is added to the bus`);
    }

    removePassenger(passenger: Passenger): void {
        console.log(`${passenger.name} is removed from the bus`);
    }
}


let taxi_1: Taxi = new Taxi();
taxi_1.travelTo({x: 1, y: 2});

let taxi_2: Taxi = new Taxi();
taxi_2.travelTo({x: 5, y: 7});
taxi_2.addPassenger({name: 'Steve', phone: '1234567890'});
taxi_2.currentLocation = {x: 2, y: 5};

let bus_1: Bus = new Bus();
bus_1.travelTo({x: 1, y: 2});