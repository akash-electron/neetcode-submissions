class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let freqHashh = {}        
        for (let i = 0; i < strs.length; i++) {
            let sortedKey = strs[i].split('').sort().join('');
            if(!freqHashh[sortedKey]){
                freqHashh[sortedKey] = []
            }
            freqHashh[sortedKey].push(strs[i]) 
        
        }
          return Object.values(freqHashh)
    }
}
