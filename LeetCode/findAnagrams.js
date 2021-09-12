const findAnagrams = (s,p) => {    
    
    let result =[];
    let fc1 = setFC(p);
    let fc2 = setFC(s.slice(0,p.length));
    if(checkAnagram(fc1, fc2))
        result.push(0);
    let l=1;
    let r=p.length;
    while(l < s.length ){
        fc2[s[l-1]] -= 1;
        fc2[s[r]] = ++fc2[s[r]] || 1;
        if(checkAnagram(fc1, fc2)){
            result.push(l);            
        }
        l++;
        r++;
    }
    return result;
}

const setFC = (p)=>{
    let fc ={};
    for(let i=0;i<p.length;i++){
        fc[p[i]] = ++fc[p[i]] || 1;
    }
    return fc;
}

const checkAnagram = (fc1, fc2) => {
    for(let key in fc1){
        if(fc1[key] != fc2[key])
            return false;
    }
    return true;
}

console.log(findAnagrams("abab", "ab"));
