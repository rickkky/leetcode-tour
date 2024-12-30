/*
 * @lc app=leetcode.cn id=26 lang=typescript
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }
    let i = 0;
    let j = 1;
    while (j < nums.length) {
        if (nums[i] !== nums[j]) {
            i += 1;
            nums[i] = nums[j];
        }
        j += 1;
    }
    return i + 1;
}
// @lc code=end

export { removeDuplicates };
