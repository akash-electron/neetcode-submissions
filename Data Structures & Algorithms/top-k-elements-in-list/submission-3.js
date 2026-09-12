class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let hashh = {};
        for(let i = 0; i < nums.length; i++){
            hashh[nums[i]] = (hashh[nums[i]] || 0) +1
        }
        let result = []
        for(const key in hashh){
            result.push([key,hashh[key]])
        }
        result.sort((a, b) => b[1] - a[1]);
        let final=[] ;
        let i =0
         while(k--){
           final[i] = Number(result[k][0])
           console.log(i)
           i++;
         }
        return final
    }
}

