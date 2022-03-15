/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * https://leetcode-cn.com/problems/two-sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();
  for (const [i, num] of nums.entries()) {
    const diff = target - num;
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(num, i);
  }
  return [];
}
// @lc code=end
