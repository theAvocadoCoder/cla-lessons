// Functional Programming

const dummyVar = 5;

function addition () {
  let num = dummyVar;
  return num + 1;
}

function multipy (num=10) {
  return num * 5;
}

const arr = [3, 6, 9, 12, 15, 18, 21];
const obj = {
  num: 7,
  string: "string",
  boolean: true,
  array: [1, 2, 3, 4, 5],
  object: {
    nestedArray: ["array"], 
    nestedString: "string", 
    nestedNumber: 100
  }
};

function divisor(array=arr) {
  array.map((num) => {
    return num / 3;
  });
}

// for...in 

for (let element in obj) {
  console.log(element, obj[element]);
}

// returns : the key is num and the value is 7
// returns : the key is string and the value is string
// returns : the key is boolean and the value is true
// returns : the key is array and the value is 1,2,3,4,5
// returns : the key is object and the value is [object Object]

// for...of

for (let element of arr) {
  console.log(`${element} divided by 3 = ${element / 3}`);
}

// returns : 3 divided by 3 = 1
// returns : 6 divided by 3 = 2
// returns : 9 divided by 3 = 3
// returns : 12 divided by 3 = 4
// returns : 15 divided by 3 = 5
// returns : 18 divided by 3 = 6
// returns : 21 divided by 3 = 7




