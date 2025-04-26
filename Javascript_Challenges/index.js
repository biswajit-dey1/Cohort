// let report = {
//   Food: 0,
//   utility: 0
//   }
//   report['Food'] = report['Food']  + 50
//   console.log(report)
//    report.utility =    report.utility  + 100
//    console.log(report)
function hello(a,b) {
    let total = a+b
 

    return function (total) { 
    
        return total
    };
  
}

const person = hello(2,4);
console.log(person)