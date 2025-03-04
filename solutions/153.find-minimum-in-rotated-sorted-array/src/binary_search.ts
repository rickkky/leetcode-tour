/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/
 */

// @lc code=start
function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const mid = (left + right) >> 1;
        if (nums[left] < nums[mid] && nums[mid] < nums[right]) {
            return nums[left];
        }
        if (nums[mid] < nums[right]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return nums[left];
}
// @lc code=end

export { findMin };
