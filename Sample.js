// const count = 0


// function increment(){

//   count++


//   return count

// }


// console.log(increment())

// console.log(increment())

// console.log(increment())

// console.log(increment())

// console.log(increment())


// let  now = new Date()

// const items = [
//   { name: "Edward", value: 21 },
//   { name: "Sharpe", value: 37 },
//   { name: "And", value: 45 },
//   { name: "The", value: -12 },
//   { name: "Magnetic", value: 13 },
//   { name: "Zeros", value: 23 },
// ];

// console.log(items)
// console.log(" ")

// // sort by value
// items.sort((a, b) => b.value - a.value);

// console.log(items)


// function hello() {

//   let counter = 0;

//   return function () {

//     counter++
//     console.log(this)

//    return counter

//   }

// }


// let gello = hello()
// let pap = hello()

// console.log(gello())
// console.log(gello())

// console.log(pap())
// console.log(pap())


// let obj = {
   
//   fname : 'biswajit',

//   greet : function(){
//    console.log(this.fname)

//    setTimeout(function(){
//      console.log(this.fname)
//    },2000)
//   }

// }

// obj.greet()

// const user = {
//   name: "biswajit",
//   hobbies: ["coding", "gaming", "music"],
//   printHobbies() {

//     this.hobbies.forEach(function(hobby){
//       console.log(`${this.name} loves ${hobby}`);
//     },this);
//   }
// };

// user.printHobbies();

// function resolver(){
//   let quote = "Hello! Everyone"
//   let number = 12
//   return `${quote} ${number}`
// }
// z
// function hello( resolve) {

//   let maa = resolve()
//   console.log(maa)
// }

// hello(resolver)


// function myFun(str1, str2, ...manyMoreArgs) {
//   console.log("a", str1);
//   console.log("b", str2);
//   console.log("manyMoreArgs", manyMoreArgs);
// }

// myFun("one", "two", "three", "four", "five", "six");


// let arr = ["one", "two", "three", "four", "five", "six"];

// let obj = {
//   fname : "Hello",
//   lname : "dey",
//   num : 12
// }

// let newObj = {
//   ...obj
// }

// console.log(newObj)
// let newArr = [...arr]
// console.log(newArr)

// function multiply(multiplier, ...numbers) {
//   console.log(numbers)
//   return numbers.map(num => num * multiplier);
// }

// console.log(multiply(2, 1, 2, 3, 4));


// function add(a, b, c) {
//   return a + b + c;
// }

// const numbers = [10, 20, 30];

// const newAdd = add(...numbers)
// console.log(newAdd)


// let obj2 = {
//     fname : "Hello",
//     lname : "dey",
//     num : 12,
//     hello : 'sgsg'
// }


// const {fname,lname, ...bye} = obj2

// const newObj = {fname,lname,...bye}



// console.log(newObj)


// let obj = {
//     fname: "Biswajit",
//     greet: function() {
//       console.log(this);
//     }
//   };

//   obj.greet()



// function createUserName(username,email,password){

//     function setUserName(username){
//         this.username = username
//         console.log("Called")
     
//      }

//     setUserName.call(this,username)
    
//     this.email = email
//     this.password = password
// }


// const chai = new createUserName("Biswajit", "biswa@ed", "123@Biswa")

// console.log(chai)


// class Hello{
//    constructor(excutor){
//      this.somoy = "Pending"
//      excutor(this.resolver)
//    }

//  resolver(){
//    this.somoy = "Fullfiled"
//  }

//  baba(){
//     console.log("Callback from p")
//  }

// }

// const p = new Hello((thikkori) =>{
//       console.log("called")
//       thikkori()
//    }

// )

// p.baba()

// Define the debounce function that captures the context and arguments.
function debounce(fn, delay) {
  let timeout;
  return function (...args) {
    // Capture the current context.
    const context = this;
    // Clear any previous timeout.
    clearTimeout(timeout);
    // Set up a new timeout.
    timeout = setTimeout(() => {
      // Use apply to call the function with the original context and arguments.
      fn.apply(context, args);
    }, delay);
  };
}

// Create an object that has a method using 'this'.
const user = {
  name: "Alice",
  greet(message,mam) {
    console.log(`${message},${mam}, ${this.name}!`);
  }
};

// Wrap the greet method with debounce.
user.debouncedGreet = debounce(user.greet, 2000);

// When you call the debounced function, 'this' inside greet still points to the user object.
user.debouncedGreet("Hello","bab");

// Even if you call it multiple times quickly, only the last call will execute after the delay.
user.debouncedGreet("Hi","amma");
user.debouncedGreet("Hey","amanda");
