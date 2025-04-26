
let person = {
    name: "Piyush"
}


// function sayHi(age){
//     return `${this.name} : ${age}`
// }

// console.log(sayHi.call(person,24))
// let bindFn  = sayHi.bind(person)

// console.log(bindFn(15));
// console.log(bindFn(34));

let status = "love"

// setTimeout(  () =>{

//     console.log(this)
// },1000)


const animals = [
    {species: "Lion", name: "King"},
    {species: "Whale", name: "Queen"}
]

function printAnimals(i){
   console.log(this)
    this.print = function () {
        console.log(`# ${i} ${this.species} : ${this.name}`)
    }

    this.print()
}


animals.forEach( (animal, index) =>{
    
    printAnimals.call(animal, index)
})
// for( let i = 0; i < animals.length ; i++){
//    printAnimals.call(animals[i], i)
// }