/*
 * @lc app=leetcode.cn id=35 lang=typescript
 *
 * https://leetcode.cn/problems/search-insert-position/
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = (left + right) >> 1;
        const x = nums[mid];
        if (x < target) {
            left = mid + 1;
        } else if (x > target) {
            right = mid - 1;
        } else {
            return mid;
        }
    }
    return left;
}
// @lc code=end

export { searchInsert };
