function countNegatives(grid){
    let result = 0;

    for(let i =0; i < grid.length ; i++){
        let arr = grid[i];

        if(arr[arr.length - 1] < 0){
            let left =0;
            let right = arr.length - 1;
    
            while(left <= right){            
                let middle = Math.floor((left + right)/ 2);
                if(arr[middle] >= 0)
                    left = middle + 1;
                else
                    right = middle - 1;
            }
    
            result += arr.length - left;
        }        
    }

    return result;
}

console.log(countNegatives([[3,-1,-3,-3,-3],[2,-2,-3,-3,-3],[1,-2,-3,-3,-3],[0,-3,-3,-3,-3]]));