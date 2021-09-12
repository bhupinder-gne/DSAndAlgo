const containsNearbyDuplicate = (nums, k) => {
    let ind = new Map();
    for(let i=0; i< nums.length; i++){
        if(ind.has(nums[i]) && i - ind.get(nums[i]) <= k)
            return true;
        
        ind.set(nums[i], i);
    }
    return false;
}

console.log(containsNearbyDuplicate([1,2,3,1,2,3],2));