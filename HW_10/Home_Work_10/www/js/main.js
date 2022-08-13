function Vehicle (model, year) {
    this.model = model;
    this.year = year;
};

Vehicle.prototype.start = function() {
    return 'The engine has been started';
};
Vehicle.prototype.end = function() {
    return 'Engine was off';
};
Vehicle.prototype.toString = function () {
    return `The model is ${this.model}. Release year ${this.year}`;
};

function Car(model, year) {
    Vehicle.call(this,model, year);
    this.model = model;
    this.year = year;
    this.numWheels = 4;
};
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

const car = new Car("Tesla", 2020);

function Motorcycle(model, year) {
    Vehicle.call(this,model, year);
    this.model = model
    this.year = year;
    this.numWheels = 2;
};
Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.constructor = Motorcycle;

const motorcycle = new Motorcycle("Harley-Davidson", 1980);

console.log(car.model);
console.log(car.year);
console.log(car.numWheels);
console.log(car.start());
console.log(car.end());
console.log(car.toString());
console.log(" ");
console.log(motorcycle.model);
console.log(motorcycle.year);
console.log(motorcycle.numWheels);
console.log(motorcycle.start());
console.log(motorcycle.end());
console.log(motorcycle.toString());