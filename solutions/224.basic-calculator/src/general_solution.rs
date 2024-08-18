/*
 * @lc app=leetcode.cn id=224 lang=rust
 *
 * https://leetcode.cn/problems/basic-calculator/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    fn priority(op: char) -> i32 {
        match op {
            '+' | '-' => 1,
            '*' | '/' | '%' => 2,
            '^' => 3,
            _ => 0,
        }
    }

    fn apply(op: char, a: i32, b: i32) -> i32 {
        match op {
            '+' => a + b,
            '-' => a - b,
            '*' => a * b,
            '/' => a / b,
            '%' => a % b,
            '^' => a.pow(b as u32),
            _ => 0,
        }
    }

    pub fn calculate(s: String) -> i32 {
        let s: Vec<char> = s.chars().filter(|&c| !c.is_whitespace()).collect();
        let mut nums = vec![0];
        let mut ops = vec![];
        let mut i = 0;
        while i < s.len() {
            match s[i] {
                '0'..='9' => {
                    let mut num = 0;
                    loop {
                        num = num * 10 + s[i].to_digit(10).unwrap() as i32;
                        if i + 1 < s.len() && s[i + 1].is_digit(10) {
                            i += 1;
                        } else {
                            break;
                        }
                    }
                    nums.push(num);
                }
                '+' | '-' | '*' | '/' | '%' | '^' => {
                    while let Some(&op) = ops.last() {
                        if op == '(' || Self::priority(op) < Self::priority(s[i]) {
                            break;
                        }
                        ops.pop();
                        let b = nums.pop().unwrap();
                        let a = nums.pop().unwrap();
                        nums.push(Self::apply(op, a, b));
                    }
                    ops.push(s[i]);
                }
                '(' => {
                    ops.push(s[i]);
                    if i + 1 < s.len() && s[i + 1] == '-' || s[i + 1] == '+' {
                        nums.push(0);
                    }
                }
                ')' => {
                    while let Some(op) = ops.pop() {
                        if op == '(' {
                            break;
                        }
                        let b = nums.pop().unwrap();
                        let a = nums.pop().unwrap();
                        nums.push(Self::apply(op, a, b));
                    }
                }
                _ => {}
            }
            i += 1;
        }
        while let Some(op) = ops.pop() {
            let b = nums.pop().unwrap();
            let a = nums.pop().unwrap();
            nums.push(Self::apply(op, a, b));
        }
        nums.last().unwrap().clone()
    }
}
// @lc code=end
