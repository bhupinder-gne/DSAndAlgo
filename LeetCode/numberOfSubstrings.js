const numberOfSubstrings = (s) => {
    let result =0;
    let myMap = {a:0,b:0,c:0};

    for(let i =0, j =0; i< s.length ;i++){
       let c = s[i];
        myMap[c]++;

        while(j<s.length && myMap['a'] > 0 && myMap['b'] > 0 && myMap['c'] > 0){
            myMap[s[j]]--;
            j++;
        }
        result += j;
    }

    return result;
}

console.log(numberOfSubstrings("abcabc")); 