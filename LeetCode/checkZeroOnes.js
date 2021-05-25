function checkZeroOnes(s){
    let l =0; let r= 1;
    let counter = {0: 0,1:0};
    if(s.length == 1){
        return s == 1 ? true : false;
    }

    while(r < s.length){
        if(s[l] == s[r]){
            counter[s[l]] = Math.max(counter[s[l]], (r-l +1));           
        }
        else{
            l = r;
        }
        ++r;
    }

    return counter[1] > counter[0] ? true : false;
}

console.log(checkZeroOnes("1101"));
console.log(checkZeroOnes("111000"));
console.log(checkZeroOnes("110100010"));
console.log(checkZeroOnes("1"));