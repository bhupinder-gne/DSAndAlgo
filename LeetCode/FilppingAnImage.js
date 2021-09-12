function filpping(image){
   let i=0;
   
   const result = createMatrixCopy(image);

   while(i < image.length){
        for(let j = image[i].length -1 ; j >= 0 ; j--)
            result[i][image[i].length - j - 1] = image[i][j] == 1 ? 0 : 1;
        i++;
   }

   return result;

}

const createMatrixCopy = (matrix) => {
  const rowLength = matrix.length;
  const columnLength = matrix[0].length;
  const copy = new Array(rowLength);

  for (let r = 0; r < rowLength; r++) {
    copy[r] = new Array(columnLength);
  }
  
  return copy;
}

console.log(filpping([[1,1,0],[1,0,1],[0,0,0]]));