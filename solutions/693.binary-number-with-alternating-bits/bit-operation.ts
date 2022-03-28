/*
 * @lc app=leetcode.cn id=693 lang=typescript
 *
 * https://leetcode-cn.com/problems/binary-number-with-alternating-bits
 */

// @lc code=start
function hasAlternatingBits(n: number): boolean {
    const temp = n ^ (n >> 1);
    return (temp & (temp + 1)) === 0;
}
// @lc code=end

export default hasAlternatingBits;
