function binarySearch(arr, val) //O(log N) equivalant to O(1)
{
    let left = 0;
    let right = arr.length -1;
    let middle = Math.floor((right + left)/2);
    while(arr[middle] != val && left <= right){
        if(val > arr[middle])
            left = middle + 1;
        else
            right = middle -1;
        
        middle = Math.floor((right + left)/2);
    }

    return arr[middle] == val ? middle : -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10], 9));