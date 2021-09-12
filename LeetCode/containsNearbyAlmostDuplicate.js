const containsNearbyAlmostDuplicate = (nums, k, t) => {
    let myMap = new Map();
    for(let i=0; i<nums.length;i++){
        let bucketId = Math.floor(nums[i]/(t+1));
        if( && Math.abs(i-j) <= k)
            return true;
    }

    return false;
}

console.log(containsNearbyAlmostDuplicate([1,2,1,1],1,0));