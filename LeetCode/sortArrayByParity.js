// var sortArrayByParity = function (nums) {
//   let i = 0;
//   let j = 1;

//   while (j < nums.length) {
//     if (nums[i] % 2 == 0) {
//       ++i;
//       ++j;
//     } else {
//       if (nums[j] % 2 == 0 || nums[i] % 2 == 0) {
//         let temp = nums[j];
//         nums[j++] = nums[i];
//         nums[i++] = temp;
//       } else j++;
//     }
//   }

//   return nums;
// };

var sortArrayByParity = function (nums) {
    var j = 0;
    
    for(var i = 0; i < nums.length; i++) {
      if(nums[i] % 2 === 0) {
            let tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
            j++
        }
    }
  return nums;
}

console.log(sortArrayByParity([1,0, 2, 1, 4]));
