// let arr = [1,2,3,5]
// let newArr = [...arr]
// newArr[1] = "Biswa"
// console.log(arr)
// console.log(newArr)

// class MyPromise{

//     constructor(fname,lname){
//         this.fname = fname
//         this.lname = lname
//     }

//     greet(){
//         return this
//     }

// }

// const p = new MyPromise("Biswajit", "Dey")

// console.log(p.greet())

// class Vehicle {
//   constructor(make, model) {
//     this.make = make;
//     this.model = model;
//   }

//   start() {
//     console.log(`${this.make} ${this.model} engine started!`);
//     console.log(this)
//     return this; // Enables chaining
//   }


//   drive() {
//     console.log(`${this.make} ${this.model} is now driving!`);
//     return this; // Enables chaining
//   }
// }

// const myCar = new Vehicle("Toyota", "Corolla");
// myCar.start().drive(); // Works perfectly!

// function ptaNhi(fn, delay) {
//   let myId;
//    console.log(arguments)
//   return function (...args) {
//     console.log(args)
//     clearTimeout(myId);
//     myId = setTimeout(() => {
//       fn.apply(this, args);
//     }, delay);
//   };
// }
// // 0201 -> dev
// //

// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// const sachMeNhiPta = ptaNhi(() => greet("hitesh"), 3000);
// sachMeNhiPta();
// sachMeNhiPta();
// sachMeNhiPta();
// remove past request => keep a reference of it
// fire a new request
// userRequest() => debouncesUserRequest()


// let hell = [1,2,4,7]
// console.log(typeof hell)
//     const baba  =  hell.toString()
//     console.log(typeof baba)


// let randomStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

// function myCrypto(length) {

//   let newStr = " "

//   for (let i = 0; i < length; i++) {
//     let myRandom = randomStr.charAt(Math.floor((Math.random() * randomStr.length)))
//     newStr = newStr + myRandom
//   }

//   return newStr
// }

// const str = myCrypto(6)
// console.log(str)


// console.log("I am Hero")

// setTimeout( function hello(){
//    console.log("I am set fn");

// }, 0)

// console.log("I am last")


// let obj = {
//   name: "Biswajit",
//   greet: function(){
//     console.log(this.name)
//   }
// }


// // let obj2 = {
// //   name : "Akash"
// // }

// // let boundObj = obj.greet.bind(obj2)

// const user = {
//   name: "Alice",
//   sayHi() {
//     console.log(`Hello, ${this.name}!`);
//   }
// };

// // Without bind: 'this' becomes the global object (or undefined in strict mode)
// setTimeout(user.sayHi, 1000); // Logs "Hello, undefined!"

// // With bind: 'this' is fixed to 'user'
// setTimeout(user.sayHi.bind(user), 2000); // Logs "Hello, Alice!"


const youtube = fetch("https://api.freeapi.app/api/v1/public/youtube/videos")

youtube.then((res) => res.json())
  .then((message) => {
    console.log(message.data.data[0].kind)
  }
  )
  .catch(error => {
    console.error("Error fetching data:", error);
  });