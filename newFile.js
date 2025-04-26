
let hello = null && 67;
let hello1 = -0 && undefined;
let hello2 =  "" ?? {a:"hello", b:"maa"} ;
let hello3 = 2 && {a:"jj"}

// console.log(hello)
// console.log(hello1)
// console.log(hello2);
// console.log(hello3)

// console.log(null || false)

// let user = null;
// console.log(user === 0)

// if (user || user === 0) {
//   console.log("User exists or is 0");
// } else {
//   console.log("User is undefined or null");
// }

// let user1 = {a:"hh"}
// console.log( Boolean(user1) == true)

// if(user1){
//     console.log("user 1")
// }else{
//     console.log("out of bound");
    
// }


// let arr = [1,4,6,9]
// console.log(arr.toString())

// console.log(new Boolean(false).valueOf() ); // Output: true

// Charging a phone until it reaches 100%
let battery = 40;
while (battery < 100) {
//   console.log(`Charging... Battery at ${battery}%`);
  battery += 20;
}
// console.log("Battery fully charged!");


let someoneAnswered = false;

do {
  console.log("Knocking on the door...");
  someoneAnswered = Math.random() > 0.6; // 40% chance someone answers
  console.log(someoneAnswered)
} while (!someoneAnswered);

console.log("Friend opened the door!");