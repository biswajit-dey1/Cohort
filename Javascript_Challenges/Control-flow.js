function largestNum(num1, num2, num3){
  if(num1 > num2 && num1 >> num3){
    console.log(`Number 1 is largest`)
  } else if (num2 > num1 && num2 > num3){
    console.log(`Number 2 is largest`)
  } else {
    console.log(`Number 3 is largest`)
  }
}

// largestNum(10,50,30)

function printFiveTabel(number){
    for(let i = 1 ; i <= 10; i++){
        console.log(`${number} * ${i} is ${number*i} `)
    }
}

// printFiveTabel(5)

function SumOfArray(array){
    let sum = 0;

    let i = 0;

     while(i<array.length){
       sum += array[i]
     i++
     }

   return sum
}

let arr = [1,2,3,4,5,6,7,8,9,10]

// let total = SumOfArray(arr)

// console.log(total)


function print10(){
    for(let i = 10 ; i >=1; i--){
        console.log(i)
    }
}

// print10()


function fact(value){
   
    let total = 1
    for(let i = value; i >= 1 ; i-- ){
        total *= i
    }
    return total
}
//  let totalValue = fact(5)
//  console.log(totalValue)


function pattern(N){                      
                                                
    for(let i = 0 ; i < N ; i++){
       let line =""
        for(let j = 0 ; j <= i ;j++){
           line = line + "* "
        }
        console.log(line)
        
    }
   
}

// pattern(4)

function printNumber(number){
    for(let i = 1 ; i <= number; i++){

        if(i === 5){
            continue
        }
        console.log(i)
    }
}

// printNumber(10)

function printBreak(number){
    for(let i = 1 ; i <= number; i++){

        if(i === 7){
         break
        }
        console.log(i)
    }
}

// printBreak(10)


function square(num){
    let sqNum = num*num
    return sqNum
}

console.log(square(4))