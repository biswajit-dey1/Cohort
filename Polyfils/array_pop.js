if (!Array.prototype.myPop)
  Array.prototype.myPop = function () {
    let lastElement;

    let lastIndex = this.length - 1

    lastElement = this[lastIndex]

    this.length = this.length - 1

    return lastElement
  };


const animals = ['pigs', 'goats', 'sheep'];

let hel = animals.myPop()

console.log(hel)
console.log(animals)