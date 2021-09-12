function characterReplacement(s,k){//abaaabbba  2
    s = s.split('');
    let l=0;
    let r=0;
    let max =0;
    let charObj = {};
    let maxChar = 0;


    while(r < s.length){
        maxChar = getChar(charObj, s,r, maxChar);
        let windowSize = r-l+1;

        if(windowSize - maxChar > k){
            charObj[s[l]] = --charObj[s[l]] ;
            ++l;
        }
        else{
            max = Math.max(max, windowSize);
        }
        ++r;

    }

    return max;
}

const getChar = (obj,s,r, maxChar) => {
    
    obj[s[r]] = ++obj[s[r]] || 1;
    maxChar = Math.max(maxChar, obj[s[r]]);
    
    return maxChar;
}

console.log(characterReplacement( "AABABBA", 1));