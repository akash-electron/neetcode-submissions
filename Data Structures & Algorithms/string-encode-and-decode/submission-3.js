class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let e = ""
        for (let i = 0; i < strs.length; i++) {
            e += strs[i].length + "#" + strs[i]
        }
        return e;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        console.log(str)
          
        let a = []
        let l = "";
        let i = 0
        for (i = 0; i < str.length;) {
            if (str[i] == "#") {
                let len = Number(l);
                console.log(i, " === ", str[i], "l == ", l, " str ", str.slice(i + 1, (Number(l) + i + 1)))
                a.push(str.slice(i + 1, (Number(l) + i + 1)))
                i = i + 1 + len;
                l = "";
            } else {
                l += str[i]
                i++;
            }

        }
        return a

    }
}
