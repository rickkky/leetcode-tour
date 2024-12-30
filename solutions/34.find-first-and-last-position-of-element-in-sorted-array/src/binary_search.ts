/*
 * @lc app=leetcode.cn id=34 lang=typescript
 *
 * https://leetcode.cn/problems/find-first-and-last-position-of-element-in-sorted-array/
 */

// @lc code=start
// Find the first element >= target in the sorted array.
function searchLower(nums: number[], target: number) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (nums[mid] >= target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}

function searchRange(nums: number[], target: number): number[] {
    const lower = searchLower(nums, target);
    if (lower >= nums.length || nums[lower] !== target) {
        return [-1, -1];
    }
    const upper = searchLower(nums, target + 1) - 1;
    return [lower, upper];
}
// @lc code=end

export { searchRange };
