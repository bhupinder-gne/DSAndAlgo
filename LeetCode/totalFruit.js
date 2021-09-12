const totalFruit = (fruits) => {
    let set = new Set([...fruits]);
    if(set.size == 2)
        return fruits.length;

    let map = new Map();
    let l =0;
    let result =0;
    for(let i=0;i<fruits.length;i++){
        map.set(fruits[i], map.has(fruits[i]) ? map.get(fruits[i])+ 1 : 1);
        while(map.size > 2){
            let item = fruits[l];
            if(map.get(fruits[l]) == 1)
                map.delete(fruits[l]);
            else
                map.set(fruits[l],map.get(fruits[l])-1);

            l++;
        }
        result = Math.max(result, i-l+1);
    }

    return result;
}

console.log(totalFruit([1,2,1]));
console.log(totalFruit([0,1,2,2]));
console.log(totalFruit([1,2,3,2,2]));
console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]));