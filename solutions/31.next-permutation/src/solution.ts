/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * https://leetcode.cn/problems/next-permutation/
 */

// @lc code=start
function swap(nums: number[], i: number, j: number) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
}

function reverse(nums: number[], start: number) {
    let i = start;
    let j = nums.length - 1;
    while (i < j) {
        swap(nums, i, j);
        i++;
        j--;
    }
}

function nextPermutation(nums: number[]): void {
    let i = nums.length - 2;
    // For a decreasing subsequence, there is no next permutation.
    // So we need to find the first element
    // where there are larger elements on the right.
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    if (i >= 0) {
        let j = nums.length - 1;
        // Find the first larger element.
        while (j > i && nums[j] <= nums[i]) {
            j--;
        }
        swap(nums, i, j);
    }
    // Reverse the right subsequence to make it increasing
    // so that the subsequence dictionary order is the smallest.
    reverse(nums, i + 1);
}
// @lc code=end

export { nextPermutation };
