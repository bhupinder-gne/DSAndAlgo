const equalSubstring =(s,t,maxCost) => {
    let l=0;
    let r = 0;
    let result =0;

    while(r < s.length){
        maxCost -= Math.abs(s.charCodeAt(r) - t.charCodeAt(r));

        if( maxCost >= 0)  {
            result = Math.max(result, r-l+1);           
        }  
        else{
            while(maxCost < 0){               
                maxCost +=  Math.abs(s.charCodeAt(l) - t.charCodeAt(l));
                ++l;
            }
        }  
        ++r;
    }

    return result;
}

function dbEqualSubString = (s, t,maxCost) =>{
    
}


console.log(equalSubstring("fghabcde","ehabcdf",3));