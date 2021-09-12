function numSubseq(nums, target){
    let maxValue = Math.max.apply(this,nums);
    let mod = (10**9 + 7);
    let n = nums.length;

    //if max value's square is less than or equal to target
    // if(maxValue * 2 <= target)
    //     return ((2**n) -1) % mod;
    
    //sort the array
    nums = nums.sort((a,b) => a-b);

    let start=0; let end =n-1;let result = 0;

    while(start <= end){
        let sum = nums[start] + nums[end];
        if(sum <= target){
            let diff = end -start;
            result += 2 ** diff ;
            ++start;
        }
        else{
            --end;
        }
    }

    return ((result % mod) + mod) % mod;
}

console.log(numSubseq([6,10,12,3,29,21,12,25,17,19,16,1,2,24,9,17,25,22,12,22,26,24,24,11,3,7,24,5,15,30,23,5,20,10,19,20,9,27,11,4,23,4,4,12,22,27,16,11,26,10,23,26,16,21,24,21,17,13,21,9,16,17,27]
   , 26))