function kWeakestRows(mat, k){
    let result = {};
    let r = [];

    for (let index = 0; index < 101; index++) {
       result[index] = [];
    }

    for (let index = 0; index < mat.length ; index++) {
        const element = mat[index];

        let soldiers = findFirstZero(element);
        result[soldiers].push(index)
        
    }
    
    for(let key in result){
        if(result[key].length > 0 ){
          r = [...r, ...result[key]];
        }
    }

    return r.slice(0,k)
}

function findFirstZero(arr){
    let left =0;
    let right = arr.length -1;

    while(left <= right){
        let middle = Math.floor((left + right)/2);

        if(arr[middle] == 1)
            left = middle +1;
        else
            right = middle -1;
    }
    return right + 1;
}

console.log(kWeakestRows([[1,1,0,0,0],
    [1,1,1,1,0],
    [1,0,0,0,0],
    [1,1,0,0,0],
    [1,1,1,1,1]], 3));