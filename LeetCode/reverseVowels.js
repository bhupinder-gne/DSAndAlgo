var reverseVowels = function(s) {
   s = s.split('');
   let vowels = new Set(['a', 'e', 'i','o','u']);
    let left =0; let right = s.length -1;
    //console.log(s);

    while(left < right){
        if(!vowels.has(s[left].toLowerCase())){
            ++left;
            continue;
        }

        if(!vowels.has(s[right].toLowerCase())){
            --right;
            continue;
        }

        let temp = s[left];
        s[left++] = s[right];
        s[right--] = temp;
    }

    return s.join('');
};

// console.log(reverseVowels('hello'));
// console.log(reverseVowels("leetcode"));
// console.log(reverseVowels(""));
// console.log(reverseVowels(" "));
// console.log(reverseVowels("a."));
console.log(reverseVowels("race car"));