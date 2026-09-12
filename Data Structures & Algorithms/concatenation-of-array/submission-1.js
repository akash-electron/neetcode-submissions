class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
       let ans = [];
       for(let i = 0; i < 2 * nums.length ; i++){
         if( i < nums.length){
            ans[i] = nums[i]
         }
         if (i >= nums.length){
            ans[i] = nums[i -nums.length]
         }
       }
       return ans;
    }
}
