// Abstraction and Encapsulation
class Car {
  constructor(brand) {
    this._brand = brand; // _brand is private, hence Encapsulation
  }

  // getter and setter methods (Encapsulation)
  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  // a method common to all cars
  startEngine() {
    return 'Engine started';
  }
}

// Inheritance
class ElectricCar extends Car {
  constructor(brand, batteryCapacity) {
    super(brand); // calls the constructor of the parent class
    this._batteryCapacity = batteryCapacity;
  }

  // Polymorphism: startEngine method in ElectricCar behaves differently than in Car
  startEngine() {
    return 'Electric engine started';
  }

  // getter and setter methods (Encapsulation)
  get batteryCapacity() {
    return this._batteryCapacity;
  }

  set batteryCapacity(newBatteryCapacity) {
    this._batteryCapacity = newBatteryCapacity;
  }
}

let myCar = new ElectricCar("Tesla", "100kWh");
console.log(myCar.startEngine());  // Electric engine started


// class Vehicle{ // class Demo
//     constructor(engPower) {
//         this._enginePower = engPower
//     }
//
//     get enginePower(){
//         return this._enginePower;
//     }
// }
//
// class MyCar extends Vehicle{
//     constructor(brand, color) {
//         super()
//         this._brand = brand;  // shadowing
//         this.color = color;
//     }
//
//     //getter
//     get carBrand(){
//         return this._brand;
//     }
//
//     set carBrand(brand){
//         // implement logic to check if the brand provided exists
//
//     }
// }
//
// let myNewCar = new MyCar(
//     "Mercedes", "Black");
// myNewCar.color = "Silver";
// myNewCar.carBrand = "BMW";
//
// console.log(myNewCar.carBrand);
// console.log(myNewCar.enginePower);
// // console.log(myNewCar.color);