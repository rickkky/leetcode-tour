/*
 * @lc app=leetcode.cn id=552 lang=rust
 *
 * https://leetcode.cn/problems/student-attendance-record-ii/
 */

pub struct Solution;

// @lc code=start
static MOD: i32 = 1_000_000_007;

impl Solution {
    pub fn check_record(n: i32) -> i32 {
        let n = n as usize;
        // dp[i][j][k] represents the number of rewardable records.
        // i: the length of the string.
        // j: the number of 'A' in the string.
        // k: the number of continuous 'L' in the end of the string.
        let mut dp = vec![vec![vec![0; 3]; 2]; n + 1];
        // Base case.
        dp[0][0][0] = 1;
        for i in 1..=n {
            // 'P' can be appended to any string.
            for j in 0..2 {
                for k in 0..3 {
                    dp[i][j][0] += dp[i - 1][j][k];
                    dp[i][j][0] %= MOD;
                }
            }
            // 'A' can only be appended to a string without 'A'.
            for k in 0..3 {
                dp[i][1][0] += dp[i - 1][0][k];
                dp[i][1][0] %= MOD;
            }
            // 'L' can only be appended to a string without 'LLL' in the end.
            for j in 0..2 {
                for k in 1..3 {
                    dp[i][j][k] += dp[i - 1][j][k - 1];
                    dp[i][j][k] %= MOD;
                }
            }
        }
        let mut sum = 0;
        for j in 0..2 {
            for k in 0..3 {
                sum = (sum + dp[n][j][k]) % MOD;
            }
        }
        sum
    }
}
// @lc code=end
