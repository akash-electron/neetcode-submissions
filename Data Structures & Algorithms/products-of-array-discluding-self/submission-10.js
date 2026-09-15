class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let a = []
        let tZ = []
        let p = 1
        for (let i = 0; i < nums.length; i++) {
            if (tZ.length >= 2) return Array.from({ length: nums.length }, () => 0)
            if (nums[i] == 0) {
                tZ.push(i)
                continue
            }
            p *= nums[i]
        }
        if (tZ.length >= 2) return Array.from({ length: nums.length }, () => 0)
        console.log("array", a)
        console.log("product", p)

        if (tZ.length == 1) {
            for (let i = 0; i < nums.length; i++) {
                if (i == tZ[0]) {

                    a[i] = p
                    continue;
                }
                a[i] = 0
            }
            console.log("entered in tZ.length == 1 loop", a)
            return a

        }


        let left = 1

        for (let i = 0; i < nums.length; i++) {
            a[i] = left
            left *= nums[i]
        }

        let right = 1

        for (let i = nums.length - 1; i >= 0; i--) {
            a[i] *= right
            right *= nums[i]
        }

        return a

    }
}
