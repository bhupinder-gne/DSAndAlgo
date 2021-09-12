const peakIndexInMountainArray =(arr) => {
    let left = 0;
    let right = arr.length -1;
    let middle;
    while(left <= right){
       middle = Math.floor((left + right)/2);

        if(arr[middle] > arr[middle + 1] && arr[middle-1] < arr[middle]){
            return middle
        }
        else if(arr[middle] < arr[middle + 1])
            left = middle + 1;
        else
            right = middle -1;
    }
}

console.log(peakIndexInMountainArray([0,1,3,4,5,6,2,1,0]));