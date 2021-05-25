// Given 2 array, find if each element of first array has squared value in other array.

function isArraySame(arr1, arr2){ //[1,2,3] , [9,4,1]
    if(arr1.length > arr2.length)
        return false;

    let result = true;

    let frequencyCounter1 ={} ; frequencyCounter2 ={};

    for(let val of arr1){
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;  //{1:1,2:1,3:1}
    }

    
    for(let i=0; i< arr2.length; i++){
        frequencyCounter2[arr2[i]] = (frequencyCounter2[arr2[i]] || 0) + 1; //{9:1,4:1,1:1}
    }

    
    console.log(frequencyCounter1, frequencyCounter2);

    for(let key in frequencyCounter1){
        if(!(key * key in frequencyCounter2))
            return false

        if(frequencyCounter1[key] !== frequencyCounter2[key* key])
            return false;
    }

    return result;
}

//console.log(isArraySame([1,2,4],[9,4]))

//ANAGRAMS
function validAnagram(str1, str2){ //"iceman","cinema"
    if(str1.length !== str2. length)
        return false; 

    let frequencyCounter1 ={};
    let frequencyCounter2={};

    for(let i =0; i< str1.length; i++){
        frequencyCounter1[str1[i]] = ++frequencyCounter1[str1[i]] || 0 ; // {i : 1, c :1, e:1, m:1, a:1, n:1}
        frequencyCounter2[str2[i]] = ++frequencyCounter2[str2[i]] || 0; // {c:1, i:1, n:1, e:1, m:1, a:1}
    }

    for(let key in frequencyCounter1){
        if(!frequencyCounter2.hasOwnProperty(key))
            return false;
        
        if(frequencyCounter1[key] !== frequencyCounter2[key])
            return false;
    }
    return true;
}

// console.log(["iceman","cinema"],validAnagram("iceman","cinema"));
// console.log(['',''],validAnagram("",""));
// console.log(['aaz','zza'],validAnagram("aaz","zza"));
// console.log(["anagram","nagaram"],validAnagram("anagram","nagaram"));
// console.log(['rat','car'],validAnagram("rat","car"));
// console.log(['awesome','awesom'],validAnagram('awesome','awesom'));
// console.log(['querty','qeywrt'],validAnagram('querty','qeywrt'));
// console.log(['quertys','qeywrtm'],validAnagram('querty','qeywrt'));

//Hacker rank question //https://www.hackerrank.com/challenges/anagram/problem
function anagram1(s){ // bbxx  xaxb
    if(s.length % 2 !== 0)
        return -1;
    
    let result = 0;
    let fc1 = {}; 
    let lengthOfStr = s.length;;
    for(let i=0; i< lengthOfStr/2;i++){
        fc1[s[i]] = ++fc1[s[i]] || 1; 
    }

   console.log(fc1);
    for(let i=lengthOfStr/2; i< lengthOfStr ;i++){
        if(fc1[s[i]])
            --fc1[s[i]];
        else
            result++;
    }

    return result;

}

// for(let item of ["aaabbb","ab","abc","mnop","xyyx","xaxbbbxx"]){
//     console.log(item, anagram(item));
// }

//https://www.hackerrank.com/challenges/making-anagrams/problem?h_r=next-challenge&h_v=zen
function anagram2(s1, s2){ // bbxx  xaxb    
    let result = 0;
    let fc1 = {};let fc2={}; 
    for(let i=0; i< s1.length;i++){
        fc1[s1[i]] = ++fc1[s1[i]] || 1; //{a:1,b:1,c:1}
    }

    for(let i=0; i< s2.length;i++){
        fc2[s2[i]] = ++fc2[s2[i]] || 1; //{a:1,m:1,n:1,o:1, p:1}
    }

   console.log(fc1);
    for(let key in fc1){
        if(fc2[key]){
            let diff = fc1[key] - fc2[key];
            result += diff > 0 ? diff : diff*-1;
            fc1[key] =0;
            fc2[key] =0;
        }
        else
            result += fc1[key];
    }

    for(let key in fc2){
        if(fc2[key])
            result += fc2[key];
    }

    return result;

}

//console.log(anagram2('cde','abc'));

function countPairs(arr) {
    // Write your code here
     // Write your code here
     let result=0;
    let arrPair =[];
    let j =arr.length -1;
    let obj = {};
    
    
    
    for(let i=0; i < arr.length; i++){
        while(j >i){
            let item = arr[i] > arr[j] ? arr[i].toString() +"-"+ arr[j].toString() : arr[j].toString() +"-"+ arr[i].toString()
            obj[item] = ++obj[item] || 1;
            --j;
        }
        j = arr.length -1;
    }
    console.log(obj);

    for(var key in obj){
        let item = key.split('-');

        let bitAnd = item[0] & item[1];
        console.log(item, bitAnd)
        while(bitAnd > 10){
            bitAnd = bitAnd / 2;
        }
        if(bitAnd % 2 == 0 && bitAnd != 0){
            let x = (bitAnd /2) % 2;
            if(x == 0 || bitAnd == 2)
                result += obj[key];
        }
        else if(bitAnd == 1)
            result += obj[key];
    }
        
        
    // }
    console.log(arrPair);
    
    return result;
}

console.log(countPairs([1, 2, 1, 3]));

var arr = [1,2,3,4,5]