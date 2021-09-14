const findKthPositive = (arr, k) => {
    let s=0;
    let e=arr.length -1;

    while(s < e){
        let m = s + Math.floor((e-s)/2);

        if(arr[m] - m -1 < k)
            s = m +1;
        else
            e = m-1;
    }

    return s + k;
}

console.log(findKthPositive([2,3,4,7,11],5));
console.log(findKthPositive([1,10,21,22,25],12));