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

console.log(sumZero([-3,-1,0,3]));
console.log(sumZero([-2,0, 1,3]));
console.log(sumZero([1,2,3]));

