const findMaxAverage = (nums, k) => {
    let i=0;
    let tempSum = 0;

    while(i < k){
        tempSum += nums[i++];
    }
    let result = tempSum / k;
    for(let i =k; i < nums.length; i++){
        tempSum = tempSum + nums[i] - nums[i-k];
        result = Math.max((tempSum/k), result);        
        console.log(tempSum, result);
    }
    return result;
}

console.log(findMaxAverage([5], 1));