/*
 * @lc app=leetcode.cn id=22 lang=typescript
 *
 * https://leetcode.cn/problems/generate-parentheses/
 */

// @lc code=start
function backtrack(
    n: number,
    leftCount: number,
    rightCount: number,
    seq: string[],
    ret: string[],
) {
    if (leftCount === n && rightCount === n) {
        ret.push(seq.join(''));
        return;
    }
    if (leftCount < n) {
        seq.push('(');
        backtrack(n, leftCount + 1, rightCount, seq, ret);
        seq.pop();
    }
    if (rightCount < leftCount) {
        seq.push(')');
        backtrack(n, leftCount, rightCount + 1, seq, ret);
        seq.pop();
    }
}

function generateParenthesis(n: number): string[] {
    const ret: string[] = [];
    backtrack(n, 0, 0, [], ret);
    return ret;
}
// @lc code=end

export { generateParenthesis };
