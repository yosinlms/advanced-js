// change everything below to the newer Javascript!

// let + const
var a = "test";
var b = true;
var c = 789;

// me answer
let a = "test";
const b = true;
var c = 789;

// Destructuring
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

// default answer
var firstName = person.firstName;
var lastName = person.lastName;
var age = person.age;
var eyeColor = person.eyeColor;

// me answer
const { firstName, lastName, age, eyeColor } = person;

// Object properties
var a = "test";
var b = true;
var c = 789;

var okObj = {
  a: a,
  b: b,
  c: c,
};
// me answer
const a = "test";
const b = true;
const c = 789;

const okObj = { a, b, c };
// Template strings
var message =
  "Hello " +
  firstName +
  " have I met you before? I think we met in " +
  city +
  " last summer no???";

// me answer
const message = `Hello ${firstName}, have I met you before? I think we met in ${city} last summer.`;

// default arguments
// default age to 10;
function isValidAge(age) {
  return age;
}

// me answer
const isValidAge = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"

// me answer
const sym = symbol("This is my first Symbol");

// Arrow functions
function whereAmI(username, location) {
  if (username && location) {
    return "I am not lost";
  } else {
    return "I am totally lost!";
  }
}

// me answer
const whereAmI = () => {
  if (username && location) {
    return "im not a lost";
  } else {
    return "im a lost";
  }
};
