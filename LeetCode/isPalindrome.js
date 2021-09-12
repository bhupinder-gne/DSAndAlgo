function isPalindrome(s){
    s=s.toLowerCase().split('');
    let aplhaNumbers = new Set(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h",
     "j", "k", "l", "z", "x", "c", "v", "b", "n", "m", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"])

    let left =0;
    let right = s.length -1;

    while(left < right){
        if(!aplhaNumbers.has(s[left])){
            ++left;
            continue;
        }

        if(!aplhaNumbers.has(s[right])){
            --right;
            continue;
        }

        if(s[left++] !== s[right--])
            return false;
    }

    return true;
}

console.log(isPalindrome("a A  a a"))
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));