const isValid = (s) => {
    if(s.length % 2 != 0)
        return false;

    let charMap = new Map();
    charMap.set('(',')');
    charMap.set('[',']');
    charMap.set('{','}');
    
    if(!charMap.has(s[0]))
        return false;

    let stack = [];
    let i =0;
    while(i < s.length){        
        if(charMap.has(s[i])){
            stack.push(s[i]);
        }
        else{
            let last = stack.pop();
            if(charMap.get(last) != s[i])
                return false;
        }
        i++
    }

    return stack.length == 0;
}

console.log(isValid("()))"));