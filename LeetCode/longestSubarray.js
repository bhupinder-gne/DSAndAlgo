const longestSubarray = (nums) => {
    let result =0;
    let anyZero = nums.filter(x => x == 0);

    //check if any element 
    if(anyZero.length == 0)
        return nums.length - 1;

    let l=0;
    let r =0;
    let k =0;

    while(r < nums.length){
        if(nums[r] == 0){
            ++k;
            while(k > 1){
                if(nums[l] == 0){
                    --k;
                }
                ++l;
            }
        }
        ++r;
        result = Math.max(result, r-l-1);
    }

    return result;
}

console.log(longestSubarray([0,0,0]));