function twoSum(nums, target){
    let diff = {};
    
    for(let i=0; i<nums.length;i++){
       if(diff.hasOwnProperty(target - nums[i])){
           return [diff[target - nums[i]],i];
       }
        
        diff[nums[i]] = i;
    }
    
    return [];
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,2], 6));
console.log(twoSum([2,5,5,11], 10));
console.log(twoSum([0,4,3,0], 0));