/*
 * @lc app=leetcode.cn id=279 lang=typescript
 *
 * https://leetcode-cn.com/problems/perfect-squares
 */

// @lc code=start
function numSquares(n: number): number {
    const maxSquareIndex: number = Math.trunc(Math.sqrt(n));
    // pre-calculate the square numbers
    const squares: number[] = [];
    for (let i = 0; i <= maxSquareIndex; ++i) {
        squares[i] = i * i;
    }
    // store the answer of `numSquares` from 1 to n
    // answers[n] will be the final result
    const answers = [0];
    for (let i = 1; i <= n; ++i) {
        answers[i] = answers[i - 1] + 1;
        for (let s = 2; s <= maxSquareIndex && i >= squares[s]; ++s) {
            answers[i] = Math.min(answers[i], answers[i - squares[s]] + 1);
        }
    }
    return answers[n];
}
// @lc code=end

export {};
