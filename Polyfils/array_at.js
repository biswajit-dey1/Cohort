
// A helpful polyfill for the myAt() array method to make your coding experience smoother and more enjoyable!

if (!Array.prototype.myAt) {

    Array.prototype.myAt = function (index) {
        let element = null;

        for (let i = 0; i < this.length; i++) {
            if (i == index || i == index + this.length ) {
                element = this[i]
            }
        }
        return element
    }
}

let arr = [1, 23, "mango", 4, "orange", { name : "Biswajit" , courseEnrollAt : "Chai and cohort"}];

let value = arr.myAt(-1)
console.log(value)

/*  ------Dry Run-----

**Implementing myAt()**

We call `myAt()` using the dot operator. For example, let’s consider the following array:


let arr = [1, 23, "mango", 4, "orange", { name: "Biswajit", courseEnrollAt: "Chai and cohort" }];

When we call `myAt(-1)` with `-1` as the argument, the element returned is stored in a variable named `value`. We then print this `value` to the console.


---Working of the customized myAt() function---

We have written an if condition to check whether the prototype of the Array has the myAt() function present in it. If myAt() is not present, we implement a customized version of myAt().

The myAt() function takes an index as a parameter, such as 1, 2, -1, etc. We then declare a variable named 'element' and initialize it to null.

**Working of the For Loop**

The for loop starts from the zero index and iterates up to (length - 1) of the given array, which in this case is: 

`arr = [1, 23, "mango", 4, "orange", { name: "Biswajit", courseEnrollAt: "Chai and cohort" }]`.

Within the loop, there is an if condition that checks a number passed as an argument to `arr.myAt()`. For example, suppose the number is -1. The condition will only be satisfied if the number in the argument matches the index of the array. As soon as it matches, the loop assigns `this[i]`, which is `arr[i]`, to the variable `element`, and this variable is returned once the match is found.

*/

