/*
 * @lc app=leetcode.cn id=5 lang=rust
 *
 * https://leetcode.cn/problems/longest-palindromic-substring/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        if s.len() < 1 {
            return s;
        }
        let s: Vec<char> = s.chars().collect();
        let n = s.len();
        let mut left = 0;
        let mut right = 0;
        for i in 0..2 * n - 1 {
            let mut l = i / 2;
            let mut r = l + i % 2;
            if s[l] != s[r] {
                continue;
            }
            loop {
                if l == 0 || r == n - 1 || s[l - 1] != s[r + 1] {
                    break;
                }
                l -= 1;
                r += 1;
            }
            if r - l > right - left {
                left = l;
                right = r;
            }
        }
        s[left..=right].iter().collect()
    }
}
// @lc code=end
