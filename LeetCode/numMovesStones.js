function numMovesStones(a,b,c){
   let arr = [a,b,c].sort((x,y) => x-y);
    a=arr[0]; b =arr[1]; c = arr[2];
    let aTob = b-a;
    let bToc = c-b;
    let a1=0;
    let a2 = 0;

    if(aTob == 1 && bToc ==1)
        return [0,0];
    
    if(aTob == 2 || bToc == 2){
        a1 = 1;
    }
    else{
        a1 += aTob == 1 ? 0 : 1;
        a1 += bToc == 1 ? 0 : 1;
    }
    
    a2 +=  aTob == 1 ? 0 : aTob -1;
    a2 +=  bToc == 1 ? 0 : bToc -1;

    return [a1, a2];
}

function numMovesStones2(a,b,c){//3,5, 10
    const [x,y,z] = [Math.abs(b-a), Math.abs(c-b), Math.abs(c-a)];
    const[min, max] = [Math.min(x,y,z), Math.max(x,y,z)];
    return max == 2 ? [0,0] :[min < 3 ?  1 : 2, max -2]
}

console.log(numMovesStones2(10,3,5));