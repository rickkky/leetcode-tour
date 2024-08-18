/*
 * @lc app=leetcode.cn id=394 lang=rust
 *
 * https://leetcode-cn.com/problems/decode-string/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn decode_string(s: String) -> String {
        // When it comes to '[', store the current string and number before '['.
        // Pop when it comes to ']'.
        let mut stack = vec![];
        let mut num = 0;
        let mut str = String::new();
        for c in s.chars() {
            match c {
                '0'..='9' => {
                    num = num * 10 + c.to_digit(10).unwrap() as i32;
                }
                '[' => {
                    stack.push((str, num));
                    num = 0;
                    str = String::new();
                }
                ']' => {
                    let (prev_str, prev_num) = stack.pop().unwrap();
                    str = prev_str + str.repeat(prev_num as usize).as_str();
                }
                _ => {
                    str.push(c);
                }
            }
        }
        str
    }
}
// @lc code=end
