//Bookmark
const maxFreq = (s, maxLetters, minSize, maxSize) => {
    let map = new Map();
    let result =0;
    outer:
    for(let i=0; i<= s.length - minSize; i++){
        const subStr = s.substr(i, minSize);
        const letter = new Set([...subStr]);
        if(letter.size > maxLetters)
            continue outer;
        let count = map.has(subStr) ? map.get(subStr) + 1 : 1;
        map.set(subStr,count)
        result = Math.max(result, count);
    }

    result;
}

console.log(maxFreq("aababcaab", 2,  3,  4));