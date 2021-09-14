const isPerfectSquare = (num) => {
    let s =1;
    let e = num/2;

    while(s < e){
        let m = Math.floor(s + (e-s)/2);

        if(m*m == num)
            return true;

        if(m*m > num)
            e = m-1;
        else if(m*m < num)
            s = m+1;

    }

    return s*s == num;
}

console.log(isPerfectSquare(15));