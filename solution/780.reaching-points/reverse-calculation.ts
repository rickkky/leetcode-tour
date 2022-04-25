/*
 * @lc app=leetcode.cn id=780 lang=typescript
 *
 * https://leetcode-cn.com/problems/reaching-points
 */

// @lc code=start
function reachingPoints(
    sx: number,
    sy: number,
    tx: number,
    ty: number,
): boolean {
    while (tx > sx && ty > sy && tx != ty) {
        if (tx > ty) {
            tx %= ty;
        } else {
            ty %= tx;
        }
    }
    if (tx === sx && ty === sy) {
        return true;
    } else if (tx === sx) {
        return ty > sy && (ty - sy) % tx === 0;
    } else if (ty === sy) {
        return tx > sx && (tx - sx) % ty === 0;
    } else {
        return false;
    }
}
// @lc code=end

export {};
