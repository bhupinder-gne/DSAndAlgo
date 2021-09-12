const maxSumTwoNoOverlap = (nums, firstLen, secondLen) => {
    return Math.max(getMax(firstLen,secondLen, nums), getMax(secondLen, firstLen, nums));
}

const getMax = (x, y, nums) => {
    let n = nums.length;
    let dp1 = [];
    let dp2 = [];
    let sum = 0;

    for(let i=0; i<n; i++){
        if(i<x){
            sum += nums[i];
            dp1[i]= sum;
        }
        else{
            sum +=nums[i]-nums[i-x];
            dp1[i] = Math.max(dp1[i-1], sum);
        }
    }
    sum =0;
    for(let i=n-1; i>=0; i--){
        if(i+y >=n){
            sum += nums[i];
            dp2[i]= sum;
        }
        else{
            sum +=nums[i]-nums[i+y];
            dp2[i] = Math.max(dp2[i+1], sum);
        }
    }

    let result =0;
    for(let i =x-1; i < n-y;i++)
        result =Math.max(result, dp1[i]+dp2[i+1]);

    return result;
}

console.log(maxSumTwoNoOverlap([2,1,5,6,0,9,5,0,3,8],3,4));