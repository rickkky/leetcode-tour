/*
 * @lc app=leetcode.cn id=15 lang=typescript
 *
 * https://leetcode.cn/problems/3sum/
 */

// @lc code=start
function threeSum(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const ret = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === 0) {
                ret.push([nums[i], nums[j], nums[k]]);
                while (j < k && nums[j] === nums[j + 1]) {
                    j += 1;
                }
                j += 1;
                while (j < k && nums[k] === nums[k - 1]) {
                    k -= 1;
                }
                k -= 1;
            } else if (sum < 0) {
                while (j < k && nums[j] === nums[j + 1]) {
                    j += 1;
                }
                j += 1;
            } else {
                while (j < k && nums[k] === nums[k - 1]) {
                    k -= 1;
                }
                k -= 1;
            }
        }
    }
    return ret;
}
// @lc code=end

export { threeSum };
