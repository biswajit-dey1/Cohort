// let target = { a: 1, b: 2 };

// let source = {
//      b: 4, 
//      c: 5,
//      property: {
//       name: "helo",
//       age: 23
//      }
//      };

// const returnedTarget = Object.assign(target, source);
// console.log( target)
// console.log(" ")



// let target1 =  new Object(target)
// target1.property.partner = "master"
// target1.a = 3
// console.log( target1)
// console.log(" ")
// console.log(target)

const target = { a: 1, b: 2 };

const source = {
  b: 4, 
  c: 5,
  property: {
    name: "helo",
    age: 23
  }
};

Object.assign(target, source);

// Create a deep copy using JSON:
const deepCopy = JSON.parse(JSON.stringify(target));

console.log("Original:", target);
console.log("Deep Copy:", deepCopy);

// Now, modify the nested property in the original object:
target.property.partner = "master";

console.log("\nAfter modifying target.property:");
console.log("Original:", target);
console.log("Deep Copy:", deepCopy);
