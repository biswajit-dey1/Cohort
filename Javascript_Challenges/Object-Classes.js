// class Person {
//     fname = "Akash";
//    lname = "Kairi"
//     getFullName = function () {
//        return `${this.fname} ${this.lname}`
//    }

// }

// const p1 = new Person()
// console.log(p1.getFullName())
// class  A {
//     funInsideA (){
//         console.log("HHHh")
//     }
//    }

//    class  B extends A {
//     funnsideB(){
//         console.log("tttr")
//     }
//    }

//    const p = new B()
//    p.funInsideA()

//   console.log( p.__proto__)
// Function.prototype.describe = function(){
//     console.log(`Function name is ${this.name}`)
// }


// function greet(){
//     console.log("hello")
// }

// greet.describe()

// Function.prototype




class Playlist {
    constructor() {
        this.song = []
    }

    addSong(...gana) {
        this.song.push(...gana)
        return this.song
    }
}


const play1 = new Playlist()

// console.log(play1.addSong("Tum hi ho","Mohabat barsa dena tu "))

class ShoppingCart {
    constructor() {
        this.items = []
    }

    addItemPrice(...price) {
        this.items.push(...price)

    }

    getTotalPrice() {
        let total = this.items.reduce((acc, currentVal) => acc + currentVal)
        return total
    }
}


const cart = new ShoppingCart()

cart.addItemPrice(10, 20, 30)

// console.log(cart.getTotalPrice())

/* ---------------------------------------------- */


class BankAccount {
    constructor(balance) {
        this.balance = balance
        this.transactions = []
    }

    deposit(amount) {
        this.balance += amount
        console.log(`Deposited : ${amount}`)
        this.transactions.push(`Deposited : ${amount}`)

        return this.balance
    }

    withDraw(amount) {

        if (this.balance < amount) {
            console.log("Balance insufficient")
        } else {
            this.balance -= amount
            console.log(`Withdrawn : ${amount}`)

            this.transactions.push(`Withdrawn : ${amount}`)
        }
        return this.balance
    }

    getTransaction() {
        console.log(this.transactions)

    }


}

const account = new BankAccount(0)

account.deposit(100)

account.withDraw(50)

account.getTransaction()







