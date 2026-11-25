class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
     let l = 0;
     let r = heights.length -1;
     let h = heights
     let mA =0;
     while(l < r){
        let len = Math.min(h[l],h[r])
        let br = r-l
        let a = len * br;
        mA = Math.max(mA , a)
        if(h[l] > h[r]) {
            r--
        } else {
            l++
        }
     }  
     return mA                                        
    }
}
