const arrangeCoins = (n) => {
    let result = 0;
    let k = n;
   for(let i=1; i<=n;i++){
       if(k == 0)
            return result;
         else if(k < 0)
        return result -1;
    
        k -= i;
        ++result;
   }
   return 1;
   
}

//Binary Search
const arrangeCoins1 = (n) => {
    if(n==1)
        return 1;
    let s=0;
    let e = n;

    while(s <= e){
        let m = Math.floor(s+(e-s)/2);
        let k = m*(m+1)/2;

        if(k == n)
            return m;
        
        if(k < n)
            s=m+1;
        else
            e = m-1;        
    }

    return s-1;
}

console.log(arrangeCoins1(8));