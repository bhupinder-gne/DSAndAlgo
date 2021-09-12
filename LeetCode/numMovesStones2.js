function numMovesStones(stones){
    let max = Math.max.apply(this, stones);
    let min = Math.min.apply(this, stones);

    console.log(max-min-(stones.length - 2));
}

console.log(numMovesStones([7,4,9]));