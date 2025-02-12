if (!Array.prototype.myPush) {
    Array.prototype.myPush = function () {

        for (let i = 0; i < arguments.length; i++) { //  i < arguments.length = 3

            this[this.length] = arguments[i];
        }

        return this.length;
    };
}


const animals = ['pigs', 'goats', 'sheep'];

const count = animals.myPush("cows", "dog", "tiger")
console.log(count);
console.log(animals)