/*
 * @lc app=leetcode.cn id=6 lang=typescript
 *
 * https://leetcode.cn/problems/zigzag-conversion/
 */

// @lc code=start
function convert(s: string, rows: number): string {
    if (rows === 1 || rows >= s.length) {
        return s;
    }
    const ret = [];
    const t = rows * 2 - 2;
    // Iterate over the rows.
    for (let i = 0; i < rows; i++) {
        // Iterate over the first index of each period.
        for (let j = 0; j + i < s.length; j += t) {
            ret.push(s[j + i]);
            if (i > 0 && i < rows - 1 && j + t - i < s.length) {
                ret.push(s[j + t - i]);
            }
        }
    }
    return ret.join('');
}
// @lc code=end

export { convert };
