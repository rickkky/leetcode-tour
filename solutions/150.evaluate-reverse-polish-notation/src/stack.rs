/*
 * @lc app=leetcode.cn id=150 lang=rust
 *
 * https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/
 */

pub struct Solution;

// @lc code=start
enum Operator {
    Add,
    Sub,
    Mul,
    Div,
}

enum Token {
    Num(i32),
    Op(Operator),
}

impl Token {
    fn from_str(s: &str) -> Token {
        match s {
            "+" => Token::Op(Operator::Add),
            "-" => Token::Op(Operator::Sub),
            "*" => Token::Op(Operator::Mul),
            "/" => Token::Op(Operator::Div),
            _ => Token::Num(s.parse().unwrap()),
        }
    }
}

impl Solution {
    pub fn eval_rpn(tokens: Vec<String>) -> i32 {
        let mut num_stack = vec![];
        for token in tokens {
            match Token::from_str(&token) {
                Token::Num(num) => num_stack.push(num),
                Token::Op(op) => {
                    let num2 = num_stack.pop().unwrap();
                    let num1 = num_stack.pop().unwrap();
                    let result = match op {
                        Operator::Add => num1 + num2,
                        Operator::Sub => num1 - num2,
                        Operator::Mul => num1 * num2,
                        Operator::Div => num1 / num2,
                    };
                    num_stack.push(result);
                }
            }
        }
        num_stack.pop().unwrap()
    }
}
// @lc code=end
