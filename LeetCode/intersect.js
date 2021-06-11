function intersect(nums1, nums2){
    let fc1 ={};
    let result =[]

    for(let item of nums1){
        fc1[item] = ++fc1[item] || 1;
    }

    for(let i=0; i<nums2.length;i++){
        if(fc1[nums2[i]]){
           result.push(nums2[i]);
           --fc1[nums2[i]];
        }
    }

    return result;
}

console.log(intersect([1,2,2,1],[2,2]));
console.log(intersect([4,9,5],[9,4,9,8,4]));