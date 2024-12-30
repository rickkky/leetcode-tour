/*
 * @lc app=leetcode.cn id=69 lang=typescript
 *
 * https://leetcode.cn/problems/sqrtx/
 */

// @lc code=start
function mySqrt(x: number): number {
    let ret = -1;
    let left = 0;
    let right = x;
    while (left <= right) {
        const mid = (left + right) >> 1;
        if (mid * mid <= x) {
            ret = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ret;
}
// @lc code=end

export { mySqrt };
