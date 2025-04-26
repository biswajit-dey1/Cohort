
// function User(name, hobbies) {
//     this.name = name;
//     this.hobbies = hobbies;
// }

// User.prototype.printHobbies = function () {

//     return () => {

//        return `${this.hobbies}`
//     }


// };

// const user = new User("biswajit", ["coding", "gaming", "music"]);

// const maa = user.printHobbies()

// console.log(maa())


// class MyPromises {

//     constructor(fn ){

//       fn( 
//         this.resolverFn.bind(this)
//       )

//      this.quote = "Who are you" 
//      this.num = 100

//     }


//     resolverFn(){
//         this.quote = "Hello! Everyone"
//         return this.quote


//     }


// }

// const p = new MyPromises( ( resolve) =>{
//      console.log(resolve())
// })


// console.log(p)


// sayHello()

// var sayHello = function (){
//     console.log("I am hello")
// }

// console.log(typeof "+")

// let helo = [3,5,7]
// console.log(helo)
// let bab = [helo]
// console.log(bab)

// let bab  = helo.reduce( (acc, curr) => {
//    let sum = acc + curr
//     return sum
//  })


//  console.log(bab)

// const emptyString = "helloabyy";

// // string is empty and separator is non-empty
// console.log(emptyString.split("a"));




//   const email = "@biswajitgmail.com"

// const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// console.log(pattern.test(email))



// function nextSlide(){

//   console.log("dfff")

// }


// // setInterval( nextSlide,3000)
// globalThis.nextSlide


let myModule = {
  hello: "this is nothing",

  baba: ["who", "are", "you"],
  path: 'c:\\Users\\\\OneDrive\\Desktop\\cohort1',
  filename: 'c:\\Users\\d1\\OneDrive\\Desktop\\cohort1\\pratice.js',
  expt: {},
  loaded: false,
  children: [],
}

// myModule.expt.name = "Biswajit"

//  let myExport = {...myModule.expt}


//  myExport.baba = "Pabitra"

//  console.log(myExport)
//  console.log(myModule.expt)

// let myBody = ''
// console.log(myBody)
// myBody = myBody + "biswajit"
// console.log(myBody)

//   const buffer = Buffer.from('Hello'); // Create a buffer from a string

// console.log(buffer);       // Output: <Buffer 48 65 6c 6c 6f>
// console.log(buffer.toString()); // Output: Hello

// let hello = Buffer.from('{"name":"'); // Corrected syntax with a valid assignment
// console.log(hello)
// let baba = hello.toString()
// console.log(baba);

// let obj = {
//   name : "Biswajit",
//   age:21,
//   number:"983535"
// }

//  let {name,age, number} = obj

// function hello(execute){
//   this.name = "pending"
//   this.baba= "pabitra"
//   // console.log(this)
//   execute(this.resolver.bind(this))

// }

// hello.prototype.resolver = function(){
//   console.log(`hello ${this.baba}`)
// }



// let p = new hello( function(resolver)
// {
//   // console.log(this)
//  resolver()
// })

// p.resolver()


// const fs = require('fs')



// setTimeout(() => console.log("hello setTimeout"),0)
// setImmediate(() =>console.log("hello setImmediate"))

// fs.readFile('sample.txt','utf-8',function(err,data){
//    setTimeout(()=>console.log(data),3000)
//    setImmediate(() => console.log("SetImmediate inside fs "))
// })

// console.log("hello")

// let hi = new Promise((resolve,reject) =>{
//    setTimeout(() =>{
//     reject("Biswajit")
//    },2000)



// })


// hi
// .then((message)=> console.log(message))
// .catch( (err) => console.log(`rejected : ${err}`))


// class Hello {
//   constructor(statusCode,message,errors){
//     this.statusCode = statusCode,
//     this.message = message,
//     this.errors = errors
//   }
// }


// const p = new Hello(
//    200,
//    "Somewent went wrong", 
//    "Error in file handlinng"
// )

// console.log(p)



function asyncHandler(requestHandler) {

  return () => {
     requestHandler()
    
  }
}

asyncHandler((req,res) => {
   
  
   new Promise((resolve, reject) => {
     resolve("hello from ")
    
  })
}
)



// const p = new Promise((resolve,reject) =>{

//   resolve('Hello from resolve')
// })

// p.then((hel)=> console.log(hel))
// .catch((err)=> console.log(err))