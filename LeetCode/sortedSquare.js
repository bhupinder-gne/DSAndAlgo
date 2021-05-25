https://leetcode.com/problems/squares-of-a-sorted-array/
var sortedSquares = function(nums) {// [-6,-5,-3,-2,-1]//[36,25,9,4,1],[1.25.9,4,36][1]
    let result =[];
    let tempArr = [];
    
    //[16,1,0,9,100]
    //[9,1,16,100]
   let l=0;let r= nums.length -1;
   let p = r;
    
    while(l <= r){
        tempArr[l] = nums[l++] ** 2;
    }
    
    l=0;
    
    while(l <= r){
        if(tempArr[l] > tempArr[r]){    
            result[p--] = tempArr[l++];
        }
        else{           
            result[p--] = tempArr[r--];
        }
    }
    
    return result;
};

console.log(sortedSquares([-4,-1,0,3,10]));
console.log(sortedSquares([-5,-4,-3,-2,-1,10]));