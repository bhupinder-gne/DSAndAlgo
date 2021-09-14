const nextGreatestLetter = (letters, target) => {
    let result = letters[0];
    let s =0;
    let e = letters.length -1;  

    while(s <= e){
        let m = Math.floor(s + (e-s)/2);

        if(s == e && letters[s] > target)
            return letters[s];

        if(letters[m] > target)
            e = m;
        else if(letters[m] <= target)
            s = m+1;
    }

    return result;
}

console.log(nextGreatestLetter(["c","f","j"], "a"));
console.log(nextGreatestLetter(["c","f","j"], "c"));
console.log(nextGreatestLetter(["c","f","j"], "d"));
console.log(nextGreatestLetter(["c","f","j"], "g"));
console.log(nextGreatestLetter(["c","f","j"], "j"));