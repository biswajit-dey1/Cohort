
if (!Array.prototype.myConcat) {
    Array.prototype.myConcat = function (...element) {

        let newArray = [...this]

        for (let i = 0; i < element.length; i++) {

            if (Array.isArray(element[i])) {
                for (let j = 0; j < element[i].length; j++) {
                    newArray.push(element[i][j])
                }
            } else {
                newArray.push(element[i])
            }
        }
        return newArray
    }
}



let arr = [1, 24, "chai", { country: "India", code: +91 }]

let arr2 = [1, 23, "mango", 4, "orange", {
    name: "Biswajit", courseEnrollAt: "Chai and cohort",

}];

let myArray = arr.myConcat(arr2, 77, "hello")

console.log(myArray)





// console.log(arr)

// let hello = [...arr,...arr2]

// hello[3].property = "nothing"


// console.log(hello)

// console.log(arr)

// let hel = [34, "debu", 33, " Maa"]
// let pa = [22, 100, "aks", "as"]
// let mine = hel.concat(pa)

// console.log(mine)
