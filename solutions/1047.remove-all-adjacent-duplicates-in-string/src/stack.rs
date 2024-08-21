/*
 * @lc app=leetcode.cn id=1047 lang=rust
 *
 * https://leetcode.cn/problems/remove-all-adjacent-duplicates-in-string/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn remove_duplicates(s: String) -> String {
        let mut stack = vec![];
        for c in s.chars() {
            match stack.last() {
                Some(&v) if v == c => {
                    stack.pop();
                }
                _ => stack.push(c),
            }
        }
        stack.iter().collect()
    }
}
// @lc code=end
