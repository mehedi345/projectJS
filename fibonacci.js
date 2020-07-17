var fibo = [0, 1];

function getFibonacciSeries(n){
    for(let i = 2; i<=n; i++){

        fibo[i] = fibo[i-2] + fibo [i-1];
    }
     
    return fibo;
}

var result = getFibonacciSeries(8);
console.log(result);