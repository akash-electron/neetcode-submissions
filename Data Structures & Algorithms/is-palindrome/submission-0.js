class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        console.log(s)
        let ss = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase()

        let l=0,r = ss.length-1
        for (let i = 0; i < ss.length/2;i++ ){
            while(l < r){
                if(ss[l] !== ss[r]){

                return false
            }
            l++;
            r--;
            }
        }
        return true 
    }
}
