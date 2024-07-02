/*
 * @lc app=leetcode.cn id=20 lang=rust
 *
 * https://leetcode-cn.com/problems/valid-parentheses
 */

pub struct Solution;

// @lc code=start
use std::collections::HashMap;

impl Solution {
    pub fn is_valid(s: String) -> bool {
        let parenthesis_dict: HashMap<char, char> = vec![('(', ')'), ('[', ']'), ('{', '}')]
            .into_iter()
            .collect();
        let mut left_stack = vec![];
        for c in s.chars() {
            if parenthesis_dict.contains_key(&c) {
                left_stack.push(c);
                continue;
            }
            if let Some(&left) = left_stack.last() {
                if let Some(&right) = parenthesis_dict.get(&left) {
                    if right == c {
                        left_stack.pop();
                    } else {
                        return false;
                    }
                }
            } else {
                return false;
            }
        }
        left_stack.is_empty()
    }
}
// @lc code=end
