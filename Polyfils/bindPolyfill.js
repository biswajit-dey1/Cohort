
const obj = {
    fname: "Biswajit",
    lname: "Dey",
    greet: function () {
        console.log(`Good morning ${this.fname} ${this.lname}`)
    }
}

let obj2 = {
    fname: "Akash",
    lname: "kairi",
}

Function.prototype.myBind = function (...args) {
    let func = this  // this -> helloName
    let context = args[0]
    let restParams = args.slice(1)

    //  console.log(context)
    return function (...anArgs) {
        // func()
        context.tempFn = func
        // console.log(context)
        context.tempFn(...restParams, ...anArgs,)
        delete context.tempFn
    }
}

function helloName(state1, state2, leo) {
    console.log(`My name is ${this.fname} ${this.lname} : ${state1} : ${state2} ,${leo}`)
}




// helloName.myBind(obj2,"Assam","Ut")("Baa")

obj.greet.bind(obj2)()