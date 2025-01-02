/*
 * @lc app=leetcode.cn id=162 lang=typescript
 *
 * htttps://leetcode.cn/problems/find-peak-element/
 */

// @lc code=start
function findPeakElement(nums: number[]): number {
    const at = (index: number) => {
        if (index < 0 || index >= nums.length) {
            return -Infinity;
        } else {
            return nums[index];
        }
    };

    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (at(mid) > at(mid - 1) && at(mid) > at(mid + 1)) {
            return mid;
        }
        if (at(mid) < at(mid + 1)) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
// @lc code=end

export { findPeakElement };
