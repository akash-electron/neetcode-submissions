class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
         for (let i=0; i < arr.length;i++) //i = 1
         {
            let greatest = arr[i+1] // 5
             for(let j=i+1; j < arr.length;j++){ //j = 2
                if( greatest < arr[j+1]){ // 4 < 5 : true
                    // finalGreatestValue = nums[j]
                    greatest = arr[j+1] // greatest = 5
               }

             }
            arr[i] = greatest
         }
         arr[arr.length -1] = -1
         return arr
    }
}
