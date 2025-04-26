// console.log(module.exports)

// let a = {
//     age : 22,
//     fname:"Biswajit"
// }
// module.exports.a = a

// console.log(module.exports)
// console.log(this)

// function test() {
//     console.log(this)
// }
// test()

// console.log(globalThis)
// console.log(this); 
// console.log(this === module.exports); 

// function greet() {
//     console.log(this);
//   }
  
//   function sayHello() {
//     console.log(this);
//   }
  
//   module.exports = {
//     greet,
//     sayHello,
//   };
// console.log(this)
// console.log(module.exports)

// console.log(module.exports === this)

// console.log(module.exports === exports)
// exports.subtract = (a, b) => a - b;
// console.log(module)
// module.exports = {
//   add: (a, b) => a + b,
 
// };



// console.log(module)
// console.log(this)
// console.log(exports)
// "use strict"

// function sayHello() {
//      console.log(this);
//    }
//     // sayHello()
//    sayHello.call("Saurav")  
// const postOnInstagram = {
//   name: "Saurav Jha",
//   post() {
//     console.log(` ${this.name} has posted new reel`); // this.name => postOnInstagram.name
//   },
// };

// const randomUser = {
// name:"Ram"
// };

// Object.setPrototypeOf(randomUser,postOnInstagram);
// randomUser.post()

// const obj = {
//   name: "Saurav",
//   greet: function () {
//     const runThis = () => {
//       console.log(`Welcome ${this.name}`); 
//     };
//     runThis();
//   },
// };
// console.log(obj.greet()); // welcome


// function User(name) {
//   this.name = name;
//   this.sayHello = function () {
//     console.log("Hello, " + this.name);
//   };

//   setTimeout(function () {
//     console.log("Inside setTimeout: " + this.name);
//   }.bind(this), 1000);

  
// }

// const u1 = new User("Saurav");
// u1.sayHello();

// function test(){
//   something = "aman"
//   baba = 2
//   console.log(something)
// }
// test()
// console.log(globalThis)

// let arr = [1,2,3,{}]

// const ravi = {
//   fname : "Biswajiy"
// }

// let akash = ravi
// akash.fname = "dey"

// console.log(ravi)
// console.log(akash)
// function createPerson(name) {
//   const obj = {};

//   obj.name = name;

//   obj.introduceSelf = function () {
//     console.log(`Hi! I'm ${this.name}.`);
//   };
//   return obj;
// }

// let obj1 = createPerson("Biswajit")
// console.log(obj1)

// let person = {
//   name : "Biswajit",
//   age : 12
// }

// console.log(Object.getPrototypeOf(person))

// const myDate = new Date()

// myDate.__proto__ = null
// console.log(myDate.__proto__)
// const target = { a: 1, b: 2 };
// const source = { b: 4, c: 5 };

// const returnedTarget = Object.assign(target, source);
// console.log(target)
// returnedTarget.b = "Akash"
// console.log(returnedTarget);
// console.log(target)

// function Person(name) {
//   this.fname = name;
// }

// // Add a method to the prototype
// Person.prototype.greet = function() {
//   console.log(`Hello, my name is ${this.fname}`);
// };

// // Create an instance without `new`
// const person1 = Object.assign({}, Person.prototype, { fname: 'Alice' });
// console.log(person1);

// function Person(name) {
//   this.fname = name;
// }

// // Add a method to the prototype
// Person.prototype.greet = function() {
//   console.log(`Hello, my name is ${this.fname}`);
// };
// Person.prototype.hello = function() {
//   console.log(`Hello`);
// };


// // Create an instance without `new`
// const person1 = Object.assign({}, Person.prototype, { fname: 'Alice' });
// console.log(Person.prototype);


// // person1.greet()

// const personPrototype = {
//   greet() {
//     console.log(`hello, my name is ${this.name}!`);
//   },
// };

// function Manus(name) {
//   this.name = name;
// }
// let man = Object.assign(Manus.prototype, personPrototype)

// console.log(Manus.prototype)
// console.log(personPrototype)

// const object1 = {
//   a: "somestring",

// };
// let objArr = Object.entries(object1)
// // console.log(objArr)

// // objArr.forEach( (val) => console.log(val))

// console.log(objArr)

// class Animal {
//   constructor(name) {
//     this.name = name;
//     console.log(this.name)
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name)
//     this.breed = breed;
//     console.log(this.breed)
//   }

//   bark() {
//     console.log(`${this.name} barks!`);
//   }
// }

// const buddy = new Dog("Buddy", "Labrador");
// buddy.speak(); // Buddy makes a noise.
// buddy.bark();  // Buddy barks!


// function a(){
// let ma = "biswajit"
// he()
// function he(){
//   console.log(ma)
// }

// }

// a()


function x(){
  for(var i = 1; i <=5; i++ ){
 
    function closes(x){
      setTimeout( function hello(){
        console.log(x);
      },x*1000)
    }
  
    closes(i)
  }
}

x()