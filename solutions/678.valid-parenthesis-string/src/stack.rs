/*
 * @lc app=leetcode.cn id=678 lang=rust
 *
 * https://leetcode.cn/problems/valid-parenthesis-string/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn check_valid_string(s: String) -> bool {
        let mut left_stack = Vec::new();
        let mut asterisk_stack = Vec::new();
        for (i, c) in s.chars().enumerate() {
            match c {
                '(' => left_stack.push(i),
                '*' => asterisk_stack.push(i),
                ')' => {
                    if !left_stack.is_empty() {
                        left_stack.pop();
                    } else if !asterisk_stack.is_empty() {
                        asterisk_stack.pop();
                    } else {
                        return false;
                    }
                }
                _ => unreachable!(),
            }
        }
        while !left_stack.is_empty() && !asterisk_stack.is_empty() {
            if left_stack.pop().unwrap() > asterisk_stack.pop().unwrap() {
                return false;
            }
        }
        left_stack.is_empty()
    }
}
// @lc code=end
