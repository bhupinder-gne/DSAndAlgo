const findLength = (nums1, nums2) => {
    let result =0;
    let map = new Map();
    if(nums1.length == 0 || nums1.length == 0)
        return 0;

    for(let i=0;i<nums1.length;i++){
        let r =i;
        while(r < nums1.length){
            let s = nums1.slice(i, ++r)
            map.set(s.join(), s.length);
        }
    }

    for(let i=0; i<nums2.length;i++){
        let r =i;
        while(r < nums2.length){
            let s = nums2.slice(i, ++r);
            if(map.has(s.join()))
                result = Math.max(map.get(s.join()), result)
        }
    }
    return result;
}
//Bookmark
//optimized using DP O(n*m)
const findLengthOPt = (nums1, nums2) => {
    let matrix = new Array(nums1.length+1).fill(0).map(() => new Array(nums2.length+1).fill(0));
    let max = 0;

    console.log(matrix);

    for(let i=1; i< matrix.length;i++){
        for(let j =1; j < matrix[0].length;j++){
            if(nums1[i-1] ==nums2[j-1])  
                matrix[i][j] = matrix[i-1][j-1] + 1;

            if(matrix[i][j] > max)
                 max = matrix[i][j];
            
        }
    }
    return max;
}


console.log(findLengthOPt([1,2,3,2,1], [3,2,1,4,7]));