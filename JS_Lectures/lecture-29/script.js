
// Javascript Function Methods

// Javascript Function Call()

// Function that add two number

function sum(a, b) {
  return a + b;
}

let result = sum.call(this, 10, 20);

console.log(result);

let result1 = sum(10, 20);

console.log(result1);

// function call / apply

function product(a, b) {
  return a + b;
}

let result2 = product.apply(this, [10, 20]);

console.log(result2);

// Object defination

const profile = {
  firstname: "John",
  lastname: "Parker",
  age: 25,
};

function greet() {
  const str = `my name is ${this.firstname} ${this.lastname}. I am ${this.age} years old.`;
  console.log(str);
}

// greet()

greet.call(profile);

// function defination

function Zoo(name, age) {
  (this.name = name), (this.age = age);
}

function Lion(name, age) {
  Zoo.call(this, name, age);
  this.sound = "roar";
}

function Snack(name, age) {
  Zoo.call(this, name, age);
  this.sound = "Hiss";
}

const snack = new Snack("Hitesh", 10);
console.log(snack.name, snack.age, snack.sound);

const lion = new Lion("Jayesh", 23);
console.log(lion.name, lion.age, lion.sound);

// function apply method

const personName = {
  firstname: "Earth",
  lastname: "Planet",
};

function greet(name, type) {
  return `${this.firstname} is type of ${this.lastname} and it's found billion yeras ago ${name} and it's part of ${type} system.`;
}

let result3 = greet.apply(personName, ["Universe", "Planetory"]);

console.log(result3);

// Object Defination

const car = {
  name: "Mahindra",
  desciption() {
    return `this ${this.name} is of ${this.color}`;
  },
};

const bike = {
  name: "Yamaha",
  color: "Black",
};

let result4 = car.desciption.apply(bike);

console.log(result4);

// multiple array with apply method

let color1 = ["Red" , "Blue" , "Green"]
let color2 = ["Black" , "Brown" , "Purple"]


color1.push.apply(color1 , color2)

console.log(color1);
