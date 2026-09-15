class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        for(let i = 0 ; i < matrix.length ; i++){
            for(let j = 0 ; j < matrix[i].length; j++){

                if(matrix[i][matrix[i].length-1]  == target) {
                    console.log("entered equal to loop")
                        return true
                } 

                if(matrix[i][matrix[i].length-1]  > target) {
                    console.log("entered greater than loop")
                    if(matrix[i][j] == target) {
                        return true
                    } else {
                        continue
                    }
                } 
                
                if(matrix[i][matrix[i].length-1]  <  target) {
                    console.log("entered less than loop" ,  i)
                    continue;
                } 
            }
            
        }
        return  false
    }
}
