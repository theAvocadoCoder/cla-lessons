// single line comment
/**
 * multiple
 * lines
 * of 
 * comments
 */

// variables
//string, number, boolean, array, object

let x = 60;
let a = -25;
let dec = 2.9;
let neg = -3.045;
let zero = 0;
let kelechi = "KelecHi";
let string = 'String';
let templateLiteral = `My name is ${kelechi}`;
let bTrue = true;
let bFalse = false;

// index (indices) 0 - last
let array = ["one", 2, true, [], {name: "value"}];

let object = {
  first: "value",
  001: "new boy",
  key: ["one", 2, 76, false],
  last: {},
};

let str = "";
let arr = [];
let obj = {};

// parameters

function myFunc () {
  let y = 61;
  x = 2021;
  console.log(x, y);
}

let addFunc = (num1, num2) => {
  return num1 + num2;
}

addFunc(10, 20);

myFunc();

// Global Scope - can be accessed from anywhere in the code
// Functional/Local Scope - can only be accessed from within the function that declares that variable 
// Block Scope

if (x == 60 || x == 61) {
  let y = 2020;
  console.log(y);
}

if (x == 60 && kelechi == "Kelechi") {
  let y = 2021;
  console.log(y);
} else if (kelechi == "Kelechi") {
  console.log("the value of x is ", x);
} else if (x == 60) {
  console.log("the value of kelechi is ", kelechi);
} else {
  console.log(x, kelechi);
}

// conditional logic
// equality/ strict equality
// inequality/ strict inequality
// less than/ less than or equal to
// more than / more than or equal to

// 

x = 2;

// equality(==) inequality(!=) strict equality(===) strict inequality(!==)
if (x <= 3) {
  console.log("x is now 3")
}

// true / false
// truthy: integers (1, 500, 68), [], {}, "string"
// falsy: 0 null undefined "" NaN 

// LOGICAL OPERATORS : OR, AND, NOT (NAND NOR)

if (firstCondition || secondCondition || thirdCondition || fourthCondition) {
  // runCode
}

if (firstCondition && secondCondition && thirdCondition && fourthCondition) {
  // runCode
}

let condition = NaN;
if (!condition) {
  console.log("code was run");
}
 