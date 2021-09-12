function longestCommonPrefix(strs){
   
    let result = '';
    const size = strs.length;
    
    if (size === 0) {
        
        return '';
    }
    
    if (size === 1) {
        
        return strs[0];
    }
    
    strs.sort();
    
    const first = strs[0];
    const last = strs[size - 1];
    
    let minLength = Math.min(first.length, last.length);
    
    for (let i = 0; i < minLength; i++){
        
        if (first[i] !== last[i]) {

            return result;
        }
            
        result += first[i];   
    }
    
    return result;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));