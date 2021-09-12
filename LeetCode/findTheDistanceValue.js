const findTheDistanceValue = (arr1, arr2, d) => {
    let result = 0;
    for(let i =0; i < arr1.length; i++){
        let  ans = true;
        for(let j=0; j < arr2.length;j++){
            if(Math.abs(arr1[i] - arr2[j]) <= d)
                ans = false;
        }
        if(ans)
            result++;
    }
    
    return result;
}


console.log(findTheDistanceValue([4,5,8],[10,9,1,8],2));