function power(base, pow){
    if(pow == 0) return 1;
    return base * power(base, --pow);
}

console.log(power(2,2));

function factorial(num){
    if(num == 1) return 1;
    return num * factorial(--num);
 }

 console.log(factorial(1));