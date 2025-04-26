
if (!Array.prototype.mySplice) {
    Array.prototype.mySplice = function (start = 0, deleteCount = 0, value) {
      
        let removeElement = []

        for(let i = start ; i < this.length ; i++){
           
            this[i] = this[i] - deleteCount;

            this.push(value)

            removeElement.push(this[i])
           
        }


        return removeElement

    }
}


const animals = ["ant", "bison", "camel", "duck", "elephant"]

const hell = animals.mySplice(1,1,"Frog")
console.log(hell)
console.log(animals)





// const animals = ["ant", "bison", "camel", "duck", "elephant"];

// // animals.splice(1,0,"Frog")

// console.log(animals)
// console.log(" ")

// const hello = animals.splice(1, 2, "dog", "cat")

// console.log(animals)
// console.log(hello)

/*
 original array:-

[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
 
modified original array:-

[ 'ant', 'dog', 'cat', 'duck', 'elephant' ]

 removed element:-

[ 'bison', 'camel' ] 
 
*/