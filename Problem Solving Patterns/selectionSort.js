const selectionSort = (arr) => {      
    for(let i=0; i<arr.length;i++){
        let min = i;
        for(let j=i+1; j<arr.length ;j++){
            if(arr[min] > arr[j])
                min = j;
        }
        if(min != i){
            let temp = arr[min];
            arr[min] = arr[i];
            arr[i] = temp;
        }     
        else
            break;

        console.log("pass", arr);
    }
    return arr;
}

console.log(selectionSort([5,3,4,1,2]));