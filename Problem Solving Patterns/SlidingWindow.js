function maxSubArraySum(arr, num){
    let maxSum = 0;

    for(let i=0; i < Math.min(num, arr.length);i++){
        maxSum += arr[i];
    }

    let tempSum = maxSum;

    for(let i = num; i < arr.length ; i++){
        tempSum = tempSum + arr[i] - arr[i - num];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

console.log(maxSubArraySum([],4));