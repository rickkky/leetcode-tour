/*
 * @lc app=leetcode.cn id=227 lang=rust
 *
 * https://leetcode-cn.com/problems/basic-calculator-ii/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn calculate(s: String) -> i32 {
        let mut nums = vec![];
        let mut num = 0;
        let mut prev_op = '+';
        for c in (s + "+").chars() {
            match c {
                '0'..='9' => {
                    num = num * 10 + c.to_digit(10).unwrap() as i32;
                }
                '+' | '-' | '*' | '/' => {
                    match prev_op {
                        '+' => nums.push(num),
                        '-' => nums.push(-num),
                        '*' => {
                            let prev = nums.pop().unwrap();
                            nums.push(prev * num);
                        }
                        '/' => {
                            let prev = nums.pop().unwrap();
                            nums.push(prev / num);
                        }
                        _ => {}
                    }
                    num = 0;
                    prev_op = c;
                }
                _ => {}
            }
        }
        nums.iter().sum()
    }
}
// @lc code=end
