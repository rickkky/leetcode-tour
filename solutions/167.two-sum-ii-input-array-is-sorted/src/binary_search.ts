/*
 * @lc app=leetcode.cn id=167 lang=typescript
 *
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++) {
        const patch = target - nums[i];
        let left = i + 1;
        let right = nums.length - 1;
        while (left <= right) {
            const mid = (left + right) >> 1;
            if (nums[mid] < patch) {
                left = mid + 1;
            } else if (nums[mid] > patch) {
                right = mid - 1;
            } else {
                return [i + 1, mid + 1];
            }
        }
    }
    return [-1, -1];
}
// @lc code=end

export { twoSum };
