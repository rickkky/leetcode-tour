/*
 * @lc app=leetcode.cn id=10 lang=typescript
 *
 * https://leetcode.cn/problems/regular-expression-matching/
 */

// @lc code=start
function isMatch(s: string, p: string): boolean {
    const m = s.length + 1;
    const n = p.length + 1;
    // The dp[i][j] indicates whether s[0, i) matches p[0, j).
    const dp = Array.from({ length: m }, () => new Array(n).fill(false));
    dp[0][0] = true;
    // Init the first row.
    for (let j = 2; j < n; j += 2) {
        dp[0][j] = dp[0][j - 2] && p[j - 1] === '*';
    }
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (p[j - 1] === '*') {
                // Consider the '*' case.
                if (dp[i][j - 2]) {
                    // If s[0, i) matches p[0, j - 2),
                    // the p[j - 2, j - 1] can be matched 0 times
                    // so that s[0, i) matches p[0, j).
                    dp[i][j] = true;
                } else if (dp[i - 1][j]) {
                    // If s[0..i - 1] matches p[0..j],
                    // the s[i - 1] need to match p[j - 2, j - 1]
                    // so that s[0, i) matches p[0, j).
                    if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
                        dp[i][j] = true;
                    }
                }
            } else {
                // Consider the non-'*' case.
                if (dp[i - 1][j - 1]) {
                    if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
                        // If s[0, i - 1) matches p[0, j - 1),
                        // the s[i - 1] need to match p[j - 1]
                        // so that s[0, i) matches p[0, j).
                        dp[i][j] = true;
                    }
                }
            }
        }
    }
    return dp[m - 1][n - 1];
}
// @lc code=end

export { isMatch };
