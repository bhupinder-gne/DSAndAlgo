function palidrome(s){//aabcc
    
    let fc ={};

    for(let i =0; i<s.length;i++){
        fc[s[i]] = ++fc[s[i]] || 1;
    }

    //console.log(fc);

    let middleChar =0;
    for(let key in fc){
        if(fc[key] % 2 == 1)
            ++middleChar;
        
    }
    return middleChar > 1 ? "NO" : "YES";
}

console.log(palidrome("aabcc"));
console.log(palidrome("baaaaabbbbb"));
console.log(palidrome("cdefghmnopqrstuvw"));