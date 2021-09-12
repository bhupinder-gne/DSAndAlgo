const numOfSubarrays = (arr, k, threshold) => {
    let result = 0;
    let sum =0;
    let i=0;
    while(i < k)
        sum += arr[i++];

    if(sum/k >= threshold)
         ++result;
    for(let i = k; i<arr.length;i++){
        sum = sum + arr[i] - arr[i-k];
        if(sum/k >= threshold)
            ++result;
    }

    return result;
}

console.log(numOfSubarrays([4,4,4,4],4,1));