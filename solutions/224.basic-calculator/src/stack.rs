/*
 * @lc app=leetcode.cn id=224 lang=rust
 *
 * https://leetcode.cn/problems/basic-calculator/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn calculate(s: String) -> i32 {
        // When it comes to '(', store the current result and sign before '('.
        // Pop when it comes to ')'.
        let mut stack = vec![];
        // Store the operand temporarily because it may be more than one digit.
        let mut num = 0;
        // The sign of the current number, 1 for positive, -1 for negative.
        let mut sign = 1;
        // The result of the current expression.
        let mut result = 0;
        for c in s.chars() {
            match c {
                '0'..='9' => {
                    num = num * 10 + c.to_digit(10).unwrap() as i32;
                }
                '+' => {
                    result += sign * num;
                    num = 0;
                    sign = 1;
                }
                '-' => {
                    result += sign * num;
                    num = 0;
                    sign = -1;
                }
                '(' => {
                    stack.push((result, sign));
                    result = 0;
                    sign = 1;
                }
                ')' => {
                    result += sign * num;
                    num = 0;
                    let (prev_result, prev_sign) = stack.pop().unwrap();
                    result *= prev_sign;
                    result += prev_result;
                }
                _ => {}
            }
        }
        result += sign * num;
        result
    }
}
// @lc code=end
