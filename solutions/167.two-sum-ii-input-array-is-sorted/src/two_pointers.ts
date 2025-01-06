/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum < target) {
            left += 1;
        } else if (sum > target) {
            right -= 1;
        } else {
            return [left + 1, right + 1];
        }
    }
    return [-1, -1];
}
// @lc code=end

export { twoSum };
