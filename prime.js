function getPrime(n){
    for(let i = 2; i <= n; i++){
        if(n % i == 0){
          return "The number is not a prime number";
        }
    }
    return "The number is  a prime number";
    
}
var result = getPrime(79);
console.log(result);