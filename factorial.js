// var factorial = 1;
// for(let i=1; i<=10; i++){
//     factorial = factorial * i;
    
// }
//console.log(factorial);
// var factorial = 1;
// var i = 1;
// while(i<=10){
//     factorial = factorial * i;
//     console.log(i, factorial);
//     i++
// }

// console.log(factorial);


function getFactorial(n){
    var factorial = 1;
    for(let i=1; i<=n; i++){
        factorial = factorial * i;
    }
    return factorial;
}

var result = getFactorial(8);
console.log(result);