function backSpaceCompare(s,t){
    let j =0;
    let fc1 = stringPostBackSpace(s);
    let fc2 = stringPostBackSpace(t);

   return fc1 == fc2;
}

function stringPostBackSpace(s){ //ab#c
    let result = [];

    for(let i=0; i<s.length; i++){
        if(s[i] == '#'){
            if(result.length >0){
                result.pop();
            }
        }
        else{
            result.push(s[i]);
        }
    }
    
    return result.join('');
}

console.log(backSpaceCompare('ab#c','acd#'));
console.log(backSpaceCompare('ab##','c#d#'));
console.log(backSpaceCompare('a##c','#a#c'));
console.log(backSpaceCompare('a#c','b'));