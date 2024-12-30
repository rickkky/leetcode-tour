/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/
 */

// @lc code=start
function findMin(nums: number[]): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (nums[left] > nums[mid]) {
            // The minimum must be in the left half.
            // Because the mid element is smaller,
            // there is possibility that the mid element is the minimum,
            // so the next search range should be [left, mid].
            right = mid;
        } else if (nums[mid] > nums[right]) {
            // The minimum must be in the right half.
            // Because the mid element is greater than the right element,
            // the mid element is impossible to be the minimum,
            // so the next search range should be [mid + 1, right].
            left = mid + 1;
        } else {
            return nums[left];
        }
    }
    return nums[left];
}
// @lc code=end

export { findMin };
