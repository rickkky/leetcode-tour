/*
 * @lc app=leetcode.cn id=150 lang=rust
 *
 * https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
 */

pub struct Solution;

// @lc code=start
use std::collections::HashSet;

impl Solution {
    pub fn eval_rpn(tokens: Vec<String>) -> i32 {
        let op_set: HashSet<&str> = ["+", "-", "*", "/"].iter().copied().collect();
        let mut num_stack = vec![];
        for token in tokens {
            if op_set.contains(token.as_str()) {
                let right = num_stack.pop().unwrap();
                let left = num_stack.pop().unwrap();
                match token.as_str() {
                    "+" => num_stack.push(left + right),
                    "-" => num_stack.push(left - right),
                    "*" => num_stack.push(left * right),
                    "/" => num_stack.push(left / right),
                    _ => {}
                }
            } else {
                num_stack.push(token.parse::<i32>().unwrap());
            }
        }
        num_stack.pop().unwrap()
    }
}
// @lc code=end
