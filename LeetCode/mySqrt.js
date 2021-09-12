const mySqrt = (x) => {
    let s=0;
    let e=x;
    let sqrt = Math.floor(Math.sqrt(x));
    console.log(sqrt);
    while(s < e){
        let m = Math.floor(s + (e-s)/2);
        
        if(m > sqrt ){
             e = m-1;
        }
        else if(m < sqrt){
            s = m + 1;
        }
        else{
            return m;
        }

    }

    return s;
};

console.log(mySqrt(8));
