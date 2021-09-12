function search(sortedArr, num){//[1,2,3,4] 2
    let min =0;
    let max = sortedArr.length -1;

    while (min <= max){
        let middle = Math.floor((min + max)/2);
        let currentElement = sortedArr[middle];

        if(currentElement > num){
            max = middle-1;
        }
        else if(currentElement < num){
            min = middle+1;
        }
        else
            return middle;
    }
    return -1;
}