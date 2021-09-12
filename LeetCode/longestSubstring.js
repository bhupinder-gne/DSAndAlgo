const longestSubstring = (s,k) => {//"ababbc"
    let n = s.length;
    let right = 0;
    let fc ={};

    if(n ==0 || n<k)
        return 0;
    
    if(k<=1) return n;

    for(let i=0; i<n;i++){
        fc[s[i]] = ++fc[s[i]] || 1;
    }

    while(right < n && fc[s[right]] >=k)
        right++;
    
    if(right >= n-1)
        return right;
    
    let ls1 = longestSubstring(s.slice(0,right),k);

    while(right < n && fc[s[right]] < k)
        ++right;

    let ls2 = right >= n-1 ? 0: longestSubstring(s.slice(right),k);

    return Math.max(ls1,ls2);
}

console.log(longestSubstring("ababacb",3));