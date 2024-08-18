/*
 * @lc app=leetcode.cn id=394 lang=rust
 *
 * https://leetcode.cn/problems/decode-string/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    fn decode(chars: &mut Vec<char>, i: &mut usize) -> String {
        let mut result = String::new();
        let mut num = 0;
        while *i < chars.len() {
            match chars[*i] {
                '0'..='9' => {
                    num = num * 10 + chars[*i].to_digit(10).unwrap() as usize;
                }
                '[' => {
                    *i += 1;
                    let sub = Self::decode(chars, i);
                    result += sub.repeat(num).as_str();
                    num = 0;
                }
                ']' => {
                    break;
                }
                _ => {
                    result.push(chars[*i]);
                }
            }
            *i += 1;
        }
        result
    }

    pub fn decode_string(s: String) -> String {
        let mut chars: Vec<char> = s.chars().collect();
        let mut i = 0;
        Self::decode(&mut chars, &mut i)
    }
}
// @lc code=end
