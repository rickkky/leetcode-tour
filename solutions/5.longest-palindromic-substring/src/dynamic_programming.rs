/*
 * @lc app=leetcode.cn id=5 lang=rust
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        if s.len() < 2 {
            return s;
        }
        let s: Vec<char> = s.chars().collect();
        let n = s.len();
        // The dp[i][j] indicates whether s[i..=j] is a palindrome.
        let mut dp = vec![vec![false; n]; n];
        for i in 0..n {
            dp[i][i] = true;
        }
        // Record the start index and the length of the longest palindrome.
        let mut start = 0;
        let mut max_len = 1;
        // Make sure we resolve the substrings from shorter to longer,
        // so that we can get dp[i][j] from dp[i + 1][j - 1].
        for l in 2..=n {
            for i in 0..n {
                let j = i + l - 1;
                if j >= n {
                    break;
                }
                if s[i] == s[j] {
                    if l <= 3 {
                        dp[i][j] = true;
                    } else {
                        dp[i][j] = dp[i + 1][j - 1];
                    }
                } else {
                    dp[i][j] = false;
                }
                if dp[i][j] && l > max_len {
                    start = i;
                    max_len = l;
                }
            }
        }
        s[start..start + max_len].iter().collect()
    }
}
// @lc code=end
