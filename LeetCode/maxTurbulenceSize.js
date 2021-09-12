const maxTurbulenceSize =(arr) => {
    if(arr.length == 1)
        return 1;
    let s=0;
    let e=1;
    let max =1;
    let lastSign =-1; //1 stands for greaterThan and 0 stands for lessthan

    while(e < arr.length){
        let tempSign = arr[e-1] > arr[e] ? 1 : 0;

        if( lastSign !== -1 && lastSign == tempSign){//Invalid window
            s=e-1;
        }
        
        if(arr[e] == arr[e-1]){
            s = e;
            lastSign = -1
        }
        else{            
            lastSign = tempSign;
        }

        
        max = Math.max(max, e-s+1);
        ++e;
    }
    return max;

}

console.log(maxTurbulenceSize([8,8,9,10,6,8,2,4,2,2,10,6,6,10,10,2,3,5,1,2,10,4,2,0,9,4,9,3,0,6,3,2,3,10,10,6,4,6,4,4,2,5,1,4,1,1,9,8,9,5,3,5,5,4,5,5,6,5,3,3,7,2,0,10,9,7,7,3,5,1,0,9,6,3,1,3,4,4,3,6,3,2,1,4,10,2,3,4,4,3,6,7,6,2,1,7,0,6,8,10]));