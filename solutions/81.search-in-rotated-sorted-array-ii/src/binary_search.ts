/*
 * @lc app=leetcode.cn id=81 lang=typescript
 *
 * https://leetcode.cn/problems/search-in-rotated-sorted-array-ii/
 */

// @lc code=start
function search(nums: number[], target: number): boolean {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (nums[mid] === target) {
            return true;
        }
        if (nums[left] === nums[mid] && nums[mid] === nums[right]) {
            left += 1;
            right -= 1;
        } else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
}
// @lc code=end

export { search };
