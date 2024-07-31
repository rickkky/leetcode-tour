/*
 * @lc app=leetcode.cn id=647 lang=rust
 *
 * https://leetcode.cn/problems/palindromic-substrings/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn count_substrings(s: String) -> i32 {
        let s: Vec<char> = s.chars().collect();
        let n = s.len();
        let mut count = 0;
        for i in 0..2 * n - 1 {
            let mut l = i / 2;
            let mut r = l + i % 2;
            if s[l] != s[r] {
                continue;
            }
            count += 1;
            loop {
                if l == 0 || r == n - 1 || s[l - 1] != s[r + 1] {
                    break;
                }
                l -= 1;
                r += 1;
                count += 1;
            }
        }
        count
    }
}
// @lc code=end
