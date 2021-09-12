function linearSearch(arr, val){
    for(let i=0; i < arr.length ; i++){
        if(arr[i] == val)
            return i;
    }

    return -1;
}

console.log(linearSearch([3,21,3,4,1,24], 1));