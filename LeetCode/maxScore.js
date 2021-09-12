const maxScore = (cardPoints, k) => {
   let leftSum =0;
   let rightSum =0;
   let f = 0;
   let rightCounter = 0;

   while(f < k){
       leftSum += cardPoints[f++];
   }
   let max = leftSum;
   --f;

   while(f >= 0){
       rightSum += cardPoints[cardPoints.length - 1 -rightCounter++ ];
       leftSum -= cardPoints[f];
       max = Math.max(leftSum + rightSum, max);
        --f;
   }

   return max;
}

console.log(maxScore([11,49,100,20,86,29,72], 4));