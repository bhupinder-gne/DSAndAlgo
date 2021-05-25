function twoSum(numbers, target){
    let l=0;
    let r=numbers.length;

    while(l < r){
        let sum = numbers[l] + numbers[r] ;
        if(sum == target){
            return [++l,++r];
        }
        else if(sum < target){
            ++l;
        }
        else{
            --r;
        }
    }
}

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([2,3,4], 6));
console.log(twoSum([-1,0], -1));