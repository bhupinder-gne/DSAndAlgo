function longestOnes(A, K){ //11000111001,3
    let l =0;
    let r=0;
    let max =0;
    let f =0;

    while(r < A.length){
        if(A[r] == 0)
            ++f;

        while(f > K){
            if(A[l++] == 0)
                --f;
            
        }
        
        max = Math.max(max, r-l+1);
        ++r;
    }

    return max;

}

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0],2));
console.log(longestOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1],3))