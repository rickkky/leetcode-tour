/*
 * @lc app=leetcode.cn id=28 lang=rust
 *
 * https://leetcode.cn/problems/implement-strstr/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        if needle.is_empty() {
            return 0;
        }
        let haystack: Vec<char> = haystack.chars().collect();
        let needle: Vec<char> = needle.chars().collect();
        let mut i = 0;
        let mut j = 0;
        while i < haystack.len() {
            if haystack[i] == needle[j] {
                i += 1;
                j += 1;
            } else {
                i = i - j + 1;
                j = 0;
            }
            if j == needle.len() {
                return (i - j) as i32;
            }
        }
        -1
    }
}
// @lc code=end
