/*
 * @lc app=leetcode.cn id=28 lang=rust
 *
 * https://leetcode-cn.com/problems/implement-strstr
 */

// @lc code=start
impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        if needle.is_empty() {
            return 0;
        }
        let mut i = 0;
        let mut j = 0;
        while i < haystack.len() {
            if haystack.as_bytes()[i] == needle.as_bytes()[j] {
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
