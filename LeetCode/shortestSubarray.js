const shortestSubarray = (nums,k) => {
    let result = nums.length+1;

    //brute force
    //let result =nums.length+1;

    for(let i=0; i<nums.length;i++){
        let sum =0;
        let l =i;
        if(nums[i] >= k)
            return 1;
        while(l < nums.length && sum < k && (l-i < result)){
            sum += nums[l];
            if(sum >= k)
                result = Math.min(result, l-i+1);
            l++;
        }
    }

    // let sum =0;
    // let map = new Map();
    // let indexMap = new Map();
    // map.set(sum,0);
    // indexMap.set(sum, 0);

    // for(let i=0; i<nums.length;i++){
    //     sum += nums[i];

    //     if(map.has(sum-k)){
    //         result = Math.min(result, i-indexMap.get(sum-k) +1 );
    //     }
    //     map.set(sum, 1);
    //     indexMap.set(sum, i);
    // }

    return result == nums.length +1 ? -1 : result;
}

console.log(shortestSubarray([77,19,35,10,-14],19));