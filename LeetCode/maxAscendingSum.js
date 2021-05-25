function maxAscendingSum(nums){ //[10,20,30,5,10,50] --> 30--> 
    let l =0;
    let r = 1;
    let sum =0;
    let tempSum = nums[l];

    while(l < nums.length){
        if(nums[l] < nums[r]){
            tempSum += nums[r++]; 
            ++l;
            sum = Math.max(sum,tempSum)
        }else{
            l = r;
            sum = Math.max(sum,tempSum);
            tempSum = nums[r++];            
        }
        
    }

    return sum;
}

//console.log(maxAscendingSum([10,20,30,5,10,50]));
//console.log(maxAscendingSum([12,17,15,13,10,11,12]));
//console.log(maxAscendingSum([10,20,30,40,50]));
//console.log(maxAscendingSum([100,10,1]));
console.log(maxAscendingSum([3,6,10,1,8,9,9,8,9]));
