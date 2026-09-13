func productExceptSelf(nums []int) []int {
    n := len(nums)
    output := make([]int, n)

    // Left products
    leftProduct := 1
    for i := 0; i < n; i++ {
        output[i] = leftProduct
        leftProduct *= nums[i]
    }

    // Right products
    rightProduct := 1
    for i := n - 1; i >= 0; i-- {
        output[i] *= rightProduct
        rightProduct *= nums[i]
    }

    return output
}