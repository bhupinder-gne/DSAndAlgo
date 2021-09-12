const findRepeatedDnaSequences = (s) => {
    let myMap = new Map();
    let result = [];

    for(let i=0; i < s.length ;i++){
        let subStr = s.slice(i,i+10);
        if(subStr.length == 10){
            //check subStr is same as temp one
            if(myMap.has(subStr))
            myMap.set(subStr, myMap.get(subStr)+1);
            else
            myMap.set(subStr, 0);
        }
    }    
    for(const [key, value] of myMap.entries()){
        if(value > 0)
            result.push(key);
    }
    return result;
}

console.log(findRepeatedDnaSequences("AAAAAAAAAAA"));