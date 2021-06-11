const trailingZeros = (num) =>{
    let result =0;

    for(let i=5; i<= num; i *= 5){
        result += parseInt(num/i);
    }

    return result;
}

console.log(trailingZeros(30));