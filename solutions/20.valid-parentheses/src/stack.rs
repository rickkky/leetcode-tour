/*
 * @lc app=leetcode.cn id=20 lang=rust
 *
 * https://leetcode-cn.com/problems/valid-parentheses
 */

pub struct Solution;

// @lc code=start
#[derive(PartialEq)]
enum ParenthesisType {
    Round,
    Square,
    Curly,
}

enum Parenthesis {
    Left(ParenthesisType),
    Right(ParenthesisType),
}

impl Parenthesis {
    fn from_char(c: char) -> Option<Parenthesis> {
        match c {
            '(' => Some(Parenthesis::Left(ParenthesisType::Round)),
            ')' => Some(Parenthesis::Right(ParenthesisType::Round)),
            '[' => Some(Parenthesis::Left(ParenthesisType::Square)),
            ']' => Some(Parenthesis::Right(ParenthesisType::Square)),
            '{' => Some(Parenthesis::Left(ParenthesisType::Curly)),
            '}' => Some(Parenthesis::Right(ParenthesisType::Curly)),
            _ => None,
        }
    }
}

impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut left_stack = vec![];
        for c in s.chars() {
            match Parenthesis::from_char(c) {
                Some(Parenthesis::Left(left)) => left_stack.push(left),
                Some(Parenthesis::Right(right)) => {
                    if let Some(left) = left_stack.pop() {
                        if left != right {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
                None => {}
            }
        }
        left_stack.is_empty()
    }
}
// @lc code=end
