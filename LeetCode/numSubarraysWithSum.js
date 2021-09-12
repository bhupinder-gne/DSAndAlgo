const numSubarraysWithSum = (nums, goal) => {
    let sum =0;
    let map = new Map([[0,1]]);
    let result =0;
    for(let i=0; i<nums.length; i++){
        sum += nums[i];

        if(map.has(sum -goal)){
            result += map.get(sum-goal);
        }
        map.set(sum, map.has(sum) ? map.get(sum) + 1 : 1);
    }
    return result;
}

console.log(numSubarraysWithSum([1,0,1,0,1],2));