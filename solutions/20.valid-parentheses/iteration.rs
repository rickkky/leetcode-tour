/*
 * @lc app=leetcode.cn id=20 lang=rust
 *
 * https://leetcode-cn.com/problems/valid-parentheses
 */

// @lc code=start
impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut stack: Vec<char> = Vec::new();
        for c in s.chars() {
            match c {
                '(' | '[' | '{' => {
                    stack.push(c);
                }
                ')' => {
                    if stack.pop() != Some('(') {
                        return false;
                    }
                }
                ']' => {
                    if stack.pop() != Some('[') {
                        return false;
                    }
                }
                '}' => {
                    if stack.pop() != Some('{') {
                        return false;
                    }
                }
                _ => {}
            }
        }
        stack.is_empty()
    }
}
// @lc code=end
