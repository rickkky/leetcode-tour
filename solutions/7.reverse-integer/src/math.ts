/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * https://leetcode.cn/problems/reverse-integer/
 */

// @lc code=start
function reverse(x: number): number {
    let ret = 0;
    while (x !== 0) {
        if (ret < -Math.pow(2, 31) / 10 || ret > (Math.pow(2, 31) - 1) / 10) {
            return 0;
        }
        const digit = x % 10;
        x = Math.trunc(x / 10);
        ret = ret * 10 + digit;
    }
    return ret;
}
// @lc code=end

console.log(reverse(-123)); // 321

export { reverse };
