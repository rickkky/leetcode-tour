/*
 * @lc app=leetcode.cn id=16 lang=typescript
 *
 * https://leetcode.cn/problems/3sum-closest/
 */

// @lc code=start
function threeSumClosest(nums: number[], target: number): number {
    nums.sort((a, b) => a - b);
    let ret = Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum === target) {
                return sum;
            }
            if (Math.abs(sum - target) < Math.abs(ret - target)) {
                ret = sum;
            }
            if (sum < target) {
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

export { threeSumClosest };
