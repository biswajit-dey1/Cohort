
if (!Array.prototype.myfill) {
    Array.prototype.myfill = function (value, start = 0, end = this.length) {

       let length = this.length

        let relativeStart;

        if (start < 0) {
            relativeStart = Math.max(length + start, 0);
        } else {
            relativeStart = Math.min(start, length);
        }

        let relativeEnd;

        if (end < 0) {
            relativeEnd = Math.max(length + end, 0)
        } else {
            relativeEnd = Math.min(end, length)
        }



        for (let i = relativeStart; i < relativeEnd; i++) {

            this[i] = value

        }

        return this
    }
}


let array1 = [1, 2, 3, 4, 7, 8, 19];

let array2 = array1.myfill(44, 1,4)
console.log(array2)


// let arr = [10,23,76,34,8]

// console.log(arr.fill(7,-2))

// console.log(" ")
// console.log(arr)
