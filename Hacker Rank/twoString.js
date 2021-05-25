//https://www.hackerrank.com/challenges/two-strings/problem?h_r=next-challenge&h_v=zen
function twoString(s1, s2){
    if( s1.length == 0 || s2.length == 0)
        return "NO";

    let fc={};
    
    for(let i=0; i < s1.length;i++ ){
        fc[s1[i]] = ++fc[s1[i]] || 1;
    }

    for(let i=0; i < s2.length ; i++){
        if(fc[s2[i]])
            return "YES";
    }

    return "NO";
}

console.log(twoString("ab","cd"));
console.log(twoString("abc","cde"));