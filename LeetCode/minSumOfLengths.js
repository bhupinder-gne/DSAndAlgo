const minSumOfLengths = (arr, target)=> {
    let result = [];
    let l =0;
    let sum =0;
    let maxR =-1;
    let maxL=-1;
    for(let r=0; r<arr.length; r++){
        sum += arr[r];
        
        while(sum > target){
            sum -= arr[l];
            l++;
        }

        if(sum == target){
            if((maxR < l && l > maxL) || Math.max.apply(null, result) > r-l+1 ){
                result.push(r-l+1);
                maxR = r;
                maxL =l
           } 
        }
    } 

    result.sort((a,b) => a-b);
    return result.length >= 2 ? result[0] + result[1] : -1;
}

// console.log(minSumOfLengths([2,1,3,3,2,3,1], 6));
// console.log(minSumOfLengths([7,3,4,7],7));
// console.log(minSumOfLengths([4,3,2,6,2,3,4],6));
// console.log(minSumOfLengths([5,5,4,4,5],3));
console.log(minSumOfLengths([1,1,1,2,2,2,4,4],6));