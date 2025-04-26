function concatString(...args){
   let newStr = "";
    for(let i = 0; i < args.length; i++){
      newStr += args[i]
    }
  return newStr
}

// let hello = concatString("Hello","Debu")

// console.log(hello)


let checkChar = (str)=> {
   for(let i = 0 ; i < str.length; i++){
    if(str[i] === "t"){
        return true
    }
   }
   return false
}


// console.log(checkChar("mother"))

function greet(name,age = 21){
  let wish = `Welcome Mr. ${name} to villa`
  console.log(wish)
  return wish
}

greet("Biswajit")
