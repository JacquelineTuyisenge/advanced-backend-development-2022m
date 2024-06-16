Object-Oriented Programming (OOP) is a programming paradigm that uses "objects" to design applications and programs. These objects are created using classes, which are essentially user-defined data types that encapsulate a set of variables and functions.

In ES6 (ECMAScript 2015), OOP is achieved using classes and inheritance. Here's a brief overview:

**Classes**: Classes are a template for creating objects. They encapsulate data with code. Class is a blueprint for an object. An example of a class declaration:

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}
```

In the example above, `Car` is a class and `this.carname` is a property.

**Constructor**: The constructor method is a special method for creating and initializing an object created with a class. It can take parameters:

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
}
```

In the example above, `constructor` is a method and `brand` is a parameter.

**Methods**: Methods are functions that let the objects do something or let something be done to them. For example:

```javascript
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}
```

In the example above, `present` is a method.

**Inheritance**: Inheritance is a way for one class to extend another class. The `extends` keyword is used to create a subclass. For example:

```javascript
class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
}
```

In the example above, `Model` is a class that inherits from the `Car` class.

**super**: The `super` keyword is used to call the constructor of the parent class. In the example above, `super(brand)` is used to call the constructor of the `Car` class.

## Getters & Setters

In JavaScript, getters and setters are used to define object accessors (methods) to access and set the values of an object. They are a part of the 'Encapsulation' principle of Object-Oriented Programming (OOP).

**Getters**: These are methods that get the value of a specific property. They are defined using the `get` keyword.

**Setters**: These are methods that set the value of a specific property. They are defined using the `set` keyword.

Here's an example of how you can use getters and setters in a class:

```javascript
class Car {
  constructor(brand) {
    this._carname = brand;
  }

  // getter
  get carname() {
    return this._carname;
  }

  // setter
  set carname(x) {
    this._carname = x;
  }
}

let myCar = new Car("Toyota");
console.log(myCar.carname);  // Toyota

myCar.carname = "Audi";
console.log(myCar.carname);  // Audi
```

In the example above, `_carname` is a property of the `Car` class. The `carname` getter method returns the value of `_carname`, and the `carname` setter method sets the value of `_carname`.

Note: It's a common convention to prefix property names that are intended to be private with an underscore. This signals to other developers that these properties should not be accessed directly.