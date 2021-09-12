const specialArray =(nums) => {
    nums = nums.sort((a,b) => {return a-b;} )

    console.log(nums);
    for(let i=0; i <= nums.length; i++){
        let l =0;
        let r = nums.length-1;
        let mid;
        while(l <= r){
            mid = Math.floor((l+r)/2);

            if(nums[mid] >= i){
                r = mid- 1;
            }
            else
                l= mid+1;
        }

        console.log(l,r,mid);
       if((nums.length - r - 1) == i)
            return i;
    }
    return -1;
}

console.log(specialArray([3,6,7,7,0]));