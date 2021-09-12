//Given a sorted array find a pair whose sum is 0;
function sumZero(arr){
    let result;
    let l = 0;
    let r = arr.length -1 ;

    while(l < r){
        let sum = arr[r] + arr[l];
        if(sum == 0)
            return [arr[l], arr[r]];
        else if(sum > 0)
            --r;
        else
            ++l;
    }

    return result;
}

function countUniqueValues(arr){
   let left =0;
   let right =1;

   while(right < arr.length){
       if(arr[left] == arr[right]){
           right++;
       }
       else{
           arr[++left] = arr[right++];
       }
   }
   return left + 1;
}


console.log(countUniqueValues([1,1,1,1,12]));
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));

console.log(sumZero([-3,-1,0,3]));
console.log(sumZero([-2,0, 1,3]));
console.log(sumZero([1,2,3]));

