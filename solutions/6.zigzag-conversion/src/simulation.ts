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
    const mat: string[][] = Array.from({ length: rows }, () => []);
    const t = rows * 2 - 2;
    let row = 0;
    for (let i = 0; i < s.length; i++) {
        mat[row].push(s[i]);
        const dir = i % t < rows - 1 ? 1 : -1;
        row += dir;
    }
    return mat.flat().join('');
}
// @lc code=end

export { convert };
