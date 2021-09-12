const guessNumber =  (n) => {
    let s =1;
    let e = n;
    
    while(s <= e){
        let m = Math.floor(s+ (e-s)/2);
        let r = guess(m);
        if(r == -1 ){
            e = m -1;
        }
        else if(r == 1){
            s = m +1;
        }
        else{
            return m;
        }
    }
    
    return -1;
}

const guess = (pick) => {
    if(pick > 6) return 1;
    if(pick < 6) return -1;
    return 0;
}

console.log(guessNumber(10));