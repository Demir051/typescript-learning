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

    color: string;
    currentLocation: Point;

    constructor(location?:Point , color?: string) {
        this.currentLocation = location ?? {x: 0, y: 0};
        this.color = color ?? "Yellow";
    }

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


let taxi_1: Taxi = new Taxi({x: 2, y: 5},"Green");
taxi_1.travelTo({x: 1, y: 2});
console.log(taxi_1.currentLocation);

let taxi_3: Taxi = new Taxi({x: 2, y: 5});
