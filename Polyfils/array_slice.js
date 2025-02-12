
if (!Array.prototype.mySlice) {
    Array.prototype.mySlice = function (start = 0, end = this.length) {

        let newArray = []
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
            newArray.push(this[i])
        }
        return newArray

    };
}


const animals = ["ant", "bison", "camel", "duck", "elephant"];

const otherAnimal = animals.mySlice(2,-1);
console.log(otherAnimal)
console.log(animals)

