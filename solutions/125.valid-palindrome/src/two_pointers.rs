/*
 * @lc app=leetcode.cn id=125 lang=rust
 *
 * https://leetcode.cn/problems/valid-palindrome/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn is_palindrome(s: String) -> bool {
        let s: Vec<char> = s
            .chars()
            .filter(|c| c.is_alphanumeric())
            .map(|c| c.to_ascii_lowercase())
            .collect();
        if s.len() < 2 {
            return true;
        }
        let mut i = 0;
        let mut j = s.len() - 1;
        while i < j {
            if s[i] != s[j] {
                return false;
            }
            i += 1;
            j -= 1;
        }
        true
    }
}
// @lc code=end
