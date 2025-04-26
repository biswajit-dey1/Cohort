



let arr = [1,25,6,8,3]

//  let get = arr.find( (value) => {
//  return value === arr[0]
//  })
   
 
// console.log(get)

// console.log(arr.at(-1))
// console.log(arr.at(0))


let doubleArr = arr.map( (value) => value*2)
// console.log(doubleArr)

 let even = arr.filter((value) => value %2 === 0)
//  console.log(even)


 let multiArr = [[1,2],["hek","maa"],[65,23],["Akash","Sumit"]]
 console.log(multiArr[1][0])

multiArr.forEach( multi => {
    if(multi.some(val => typeof val === "number" && val >2) )
        console.log(multi);
    }
)