//bookmark https://www.youtube.com/watch?v=20v8zSo2v18
const numberOfSubarrays =(nums, k) => {
    let result =0;
    let sum = 0;

    //convert array to 0 and 1
    for(let i=0; i < nums.length; i++){
        if(nums[i] % 2 == 0)
            nums[i] =0;
        else
            nums[i] =1;
    }
    
    let map = new Map();
    map.set(0,1);

    for(let i=0; i<nums.length;i++){
        sum += nums[i];

        if(map.has(sum - k)){
            result += map.get(sum -k);
        }
        map.set(sum, map.has(sum)? map.get(sum)+1 : 1)
    }

    return result;
}

console.log(numberOfSubarrays([1,1,2,1,1],3));
console.log(numberOfSubarrays([2,4,6],1));
console.log(numberOfSubarrays([2,2,2,1,2,2,1,2,2,2],2));