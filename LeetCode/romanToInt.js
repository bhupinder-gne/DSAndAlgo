const romanToInt = (s) => {
    let subtractions = new Map();
    subtractions.set('IV', 4);
    subtractions.set('IX', 9);
    subtractions.set('XL', 40);
    subtractions.set('XC', 90);
    subtractions.set('CD', 400);
    subtractions.set('CM', 900);

    let romanSet = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' :1000
    }

    let temp = romanSet[s[0]]; //1
    let lastChar = s[0];//I
    let result  =romanSet[s[0]]; //1

    for(let i=1; i < s.length ;i++){
        
        if(subtractions.has(lastChar + s[i])){
            result += (-temp) + subtractions.get(lastChar + s[i]);
        }
        else
            result += romanSet[s[i]]; 
        temp = romanSet[s[i]]; //1
        lastChar = s[i];
    }

    return result;
}

console.log(romanToInt("MCMXCIV"));