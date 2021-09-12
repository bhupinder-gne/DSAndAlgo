const countGoodSubstrings= (s) => {
    let result =0;
    for(let i=0; i+3 <=  s.length; i++){
        let uniqueChar = new Set();
        let subStr = s.slice(i, i+3);
        let j =0;
        while(j< 3 ){
            uniqueChar.add(subStr[j++]);
        }
        if(uniqueChar.size == 3)
            ++result;
    }

    return result;
}

console.log(countGoodSubstrings("aababcabc"));