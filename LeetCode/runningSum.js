function runningSum(nums) {
    let tempSum = 0;
    let result = [];
    for(let i=0; i< nums.length;i++){
        tempSum += nums[i];
    }
    
    result[nums.length -1] = tempSum;
    
    for(let i= nums.length-2; i >= 0;i--){
        tempSum -= nums[i+1];
        result[i] = tempSum;
    }  
    
    return result
};

console.log(runningSum([1,2,3,4,5]));