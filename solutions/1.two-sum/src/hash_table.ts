/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * https://leetcode.cn/problems/two-sum/
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    const map: Map<number, number> = new Map();
    for (const [i, num] of nums.entries()) {
        const patch = target - num;
        if (map.has(patch)) {
            return [map.get(patch)!, i];
        }
        map.set(num, i);
    }
    return [];
}
// @lc code=end

export { twoSum };
