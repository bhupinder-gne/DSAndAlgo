const checkInclusion = (s1, s2) =>{
    if(s1.length > s2. length)
        return false;

    let fc1 ={};
    let fc2 = {};

    for(let i =0; i< s1.length;i++){
        fc1[s1[i]] = ++fc1[s1[i]] || 1;
        fc2[s2[i]] = ++fc2[s2[i]] || 1;
    }

    let s=0; e = s1.length -1;
    let result = true;
    while(e<s2.length){
        result = true;
        for(let key in fc1){
            if(!fc2[key] ||  fc2[key] != fc1[key]){
                fc2[s2[++e]] = ++fc2[s2[e]] || 1;
                --fc2[s2[s++]];
                result = false;
                break;
            }
           continue;
        }     
        if(result){
            return true;
        }  

    }
    return false;
}

console.log(checkInclusion("abc","cccccbabbbaaaa"));