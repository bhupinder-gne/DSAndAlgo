function sameFrequency(num1, num2){
    let fc1 = {};
    let fc2 ={};
    num1 = num1.toString();
    num2 = num2.toString();

    if(num1.length !== num2.length)
        return false;

    for(let i=0; i < num1.length; i++){
        fc1[num1[i]] = ++ fc1[num1[i]] || 1;
        fc2[num2[i]] = ++ fc2[num2[i]] || 1;
    }

    for(let key in fc1){
        if(!fc2[key] || fc2[key] != fc1[key])
            return false;
    }

    return true;
}

function areThereDulicates(arr){
    let fc ={};

    for(let item of arr){
        if(fc[item]){
            return false;
        }
        else{
            fc[item] = 1;
        }
    }

    return true;
}

function averagePair(arr, target){
    let left =0;
    let right = 1;
    target = target * 2;

    while(left < arr.length){
        let sum = arr[left] + arr[right];

        if(sum == target)
            return true;

        if(target > sum){
            ++right;
        }
        else if(sum > target || right == arr.length){
            right = ++left;
        }
    }
    return false;
}

function isSubsequence(str1, str2){
    if(str1.length > str2. length)
        return false;
    
    let i=0;
    let j =0;

    while(j < str2.length){
        if(str1[i] == str2[j++]){
            if(i == str1.length -1)
                return true;
            else
                ++i;
        }
    }
    return false;
}

function maxSubArraySum(arr, num){
    if(num >= arr.length)
        return null;

    let maxSum =0;
    let i =0;
    while(i < num){
        maxSum += arr[i++];
    }
        
    let tempSum = maxSum;

    for(let i =num; i< arr.length ; i++){
        tempSum = tempSum + arr[i] - arr[i - num];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
    
}


//Ultra important
function minSubArrayLen(nums, target){//4,[1,2,3,4]
    let sum = 0;
    let minLen = Infinity;
    let left =0;
    let right = 0;

    while(right < nums.length){     
           sum += nums[right];
            while(sum >= target){
                minLen = Math.min(minLen, right-left+1);
                if(minLen == 1)
                    return 1;
                sum -= nums[left++];
            }
            ++right;
    }

    return minLen == Infinity ? 0 : minLen;
}

// console.log(maxSubArraySum([100,200,300,400],2));
// console.log(maxSubArraySum([1,4,2,10,23,3,1,0,20],4));
// console.log(maxSubArraySum([2,3],3));
//
// console.log(minSubArrayLen([2,3,1,2,4,7],7));
// console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52));

// console.log(isSubsequence('hello','hello world'));
// console.log(isSubsequence('hello','world'));
// console.log(isSubsequence('abc','abracadabra'));

//console.log(averagePair([-1, 0,3,4,5,6], 4.1));

//Ultra important
function findLongestSubString(s){


    let max =0;
    let left =0;
    let right =0;
    let charObj ={};

    while(right < s.length){
        if(charObj.hasOwnProperty(s[right])){
            left = charObj[s[right]] +1;
            
            for(let key in charObj){
                if(charObj[key] <= charObj[s[right]]){
                    delete charObj[key];
                }
            }
        }
        

        charObj[s[right]] = right;
        max = Math.max(max, right - left +1);
        ++right;
    }

    return max;

}

console.log(findLongestSubString('bbbbbb'));