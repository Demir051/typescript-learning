var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taxi travels to ".concat(point.x, " and ").concat(point.y));
    };
    Taxi.prototype.getDistance = function (pointA, pointB) {
        return 1000;
    };
    Taxi.prototype.addPassenger = function (passenger) {
        console.log("".concat(passenger.name, " is added to the passenger list"));
    };
    Taxi.prototype.removePassenger = function (passenger) {
        console.log("".concat(passenger.name, " is removed from the passenger list"));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Bus travels to ".concat(point.x, " and ").concat(point.y));
    };
    Bus.prototype.getDistance = function (pointA, pointB) {
        return 500;
    };
    Bus.prototype.addPassenger = function (passenger) {
        console.log("".concat(passenger.name, " is added to the bus"));
    };
    Bus.prototype.removePassenger = function (passenger) {
        console.log("".concat(passenger.name, " is removed from the bus"));
    };
    return Bus;
}());
var taxi_1 = new Taxi();
taxi_1.travelTo({ x: 1, y: 2 });
