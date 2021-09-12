function bubbleSort(arr){
    //iterate over array and keep moving largest value to the end
    for(let i=arr.length; i > 0; i--){
        for(let j =0; j<i-1; j++){
            if(arr[j] > arr[j+1])
            {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
    }

    return arr;
}

//optimized one --> check if we made any swap in one pass if no swap is done then don't do anything.
function bubbleSortOptimized(arr){
     //iterate over array and keep moving largest value to the end
     for(let i=arr.length; i > 0; i--){         
        let anySwap = false;
        for(let j =0; j<i-1; j++){
            if(arr[j] > arr[j+1])
            {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
                anySwap = true;
            }
        }
        if(!anySwap)
            break;
        console.log("Pass");
    }

    return arr;
}

console.log(bubbleSortOptimized([1,2,3,5,4,6,7,8,9,10]));