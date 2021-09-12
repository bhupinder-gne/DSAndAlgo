const longestNiceSubstring = (s) => {
   let result = "";
   for(let i=0; i< s.length; i++){
    let sCharSet = new Set();
    let cCharSet = new Set();
       for(let j = i; j<s.length;j++){
            getCase(s[j]) ? cCharSet.add(s[j].toLowerCase()) : sCharSet.add(s[j]);   
            let isSame = checkIfBothAreSame(sCharSet, cCharSet);  
            if(isSame){
                result = Math.max(result.length, j-i +1) == result.length ? result : s.slice(i,j+1);
            }
            //console.log(i,j,s[j], sCharSet, cCharSet, isSame, result);
       }
   }
   return result;
}   

const checkIfBothAreSame= (sCharSet, cCharSet) => {

    if(cCharSet.size == 0 || sCharSet.size == 0 || cCharSet.size != sCharSet.size)
        return false;
    
    for(let a of sCharSet)
        if(!cCharSet.has(a))
            return false;
    return true;
    
}

const getCase = (c) => {
    return c == c.toUpperCase();  //its upper case
}

console.log(longestNiceSubstring("dDzeE"));