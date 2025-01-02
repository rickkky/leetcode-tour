/*
 * @lc app=leetcode.cn id=154 lang=typescript
 *
 * https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array-ii/
 */

// @lc code=start
function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = (left + right) >> 1;
        if (nums[mid] < nums[right]) {
            right = mid;
        } else if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right -= 1;
        }
    }
    return nums[left];
}
// @lc code=end

export { findMin };
