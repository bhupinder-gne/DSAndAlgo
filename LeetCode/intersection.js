function intersection(nums1, nums2){
    let fc1 ={};
    let fc2 ={};
    let result =[];

    for(let item of nums1){
        fc1[item] = ++fc1[item] || 1;
    }

    
    for(let item of nums2){
        fc2[item] = ++fc2[item] || 1;
    }

    for(let key in fc1){
        if(fc2[key]){
            result.push(key);
        }
    }

    return result;
}

console.log(intersection( [1,2,2,1], [2,2]));
console.log(intersection( [4,9,5], [9,4,9,8,4]));