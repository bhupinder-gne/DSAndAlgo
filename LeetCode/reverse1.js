function reverse(x){
    let result =x >=0 ? '' : '-';
    x = x >=0 ? x.toString() : (x *-1).toString();
   

    for(let i=x.length -1; i >= 0;i--){
        result += x[i];
    }

    if(Number(result) < Math.pow(-2,31) || Number(result) > Math.pow(2, 31) -1)
     return 0;
     
    return Number(result); 
}

console.log(reverse(1534236469));