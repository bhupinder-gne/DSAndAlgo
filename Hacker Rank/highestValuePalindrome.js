function highestValuePalindrome(s, n, k) { //36945 --> 56965 
    // Write your code here
    let l =0; let r=n-1;
    let strArr = s.split("");

    while(l < r){
        if(s[l] != s[r]){
            strArr[l] = strArr[r] = Math.max(strArr[l], strArr[r]);
            --k;
        }
        ++l;
        --r;
    }

    if(k < 0)
        return -1;
    
    l = 0;
    r = n-1;

    while(l <= r){
        if(l == r && k > 0)
            strArr[l] = '9';

        // if 
        if(strArr[l] != '9'){
            if(k  > 1 && strArr[l] == s[l] && strArr[r] == s[r]){
                k -= 2;
                strArr[l] = strArr[r] = '9';
            }
            else if(k >= 1 && (strArr[l] != s[l] || strArr[r] != s[r] ) ){
                --k;
                strArr[l] = strArr[r] = '9';
            }
        }
        ++l;
        --r;
    }
    
    return strArr.join('');
    
}

console.log(highestValuePalindrome("3943",4,1));
console.log(highestValuePalindrome("092282",6,3));
console.log(highestValuePalindrome("0011",4,1));
console.log(highestValuePalindrome("0011",4,2));//1011// 