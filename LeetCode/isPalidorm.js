function isPalindrome(x){
    if(x < 0)
        return false;
    let sum =0;
    let temp = x;

    while(temp > 0){
        sum = sum * 10 + (temp %10);
        temp = parseInt(temp/10);
    }

    return x == sum ?  true : false;
}

console.log(isPalindrome(-101));