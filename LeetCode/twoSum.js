function twoSum(numbers, target) {
  let s = 0;
  let e = numbers.length - 1;

  for (let i = 0; i < numbers.length; i++) {
    let req_num = target - numbers[i];
    s = i;
    while (s <= e) {
      let m = Math.floor(s + (e - s) / 2);

      if (req_num == target) {
        return [++i, ++m];
      }
      else if(req_num < numbers[m])
        e = m-1;
      else
        s = m + 1;
    }
  }

  return -1;
}

console.log(twoSum([3, 24, 50, 79, 88, 150, 345], 200));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,2], 6));
// console.log(twoSum([2,5,5,11], 10));
// console.log(twoSum([0,4,3,0], 0));
