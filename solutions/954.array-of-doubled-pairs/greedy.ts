/*
 * @lc app=leetcode.cn id=954 lang=typescript
 *
 * https://leetcode-cn.com/problems/array-of-doubled-pairs
 */

// @lc code=start
function canReorderDoubled(nums: number[]): boolean {
    const map = new Map<number, number>();
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const sorted = [...map.keys()].sort((a, b) => Math.abs(a) - Math.abs(b));
    for (const num of sorted) {
        const count1 = map.get(num) as number;
        const count2 = map.get(2 * num) || 0;
        if (count2 < count1) {
            return false;
        }
        map.set(2 * num, count2 - count1);
    }
    return true;
}
// @lc code=end

export default canReorderDoubled;
