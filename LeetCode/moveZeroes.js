function moveZeroes(nums){//[0,1,0,3,12]-> [1,0,0,3,12]
    let l=0; 
    let r =1;

    while(r < nums.length){
        if(nums[l] == 0 && nums[r] == 0){
            ++r;
        }
        else if(nums[l] == 0){
            let temp = nums[r];
            nums[r++]=nums[l];
            nums[l++] = temp;
        }
        else{
            ++l;
            ++r;
        }
    }
    return nums;
}

console.log(moveZeroes([1,0]));