/*
 * @lc app=leetcode.cn id=13 lang=rust
 *
 * https://leetcode.cn/problems/roman-to-integer
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        let mut result = 0;
        let mut prev = 0;
        for c in s.chars() {
            let curr = match c {
                'I' => 1,
                'V' => 5,
                'X' => 10,
                'L' => 50,
                'C' => 100,
                'D' => 500,
                'M' => 1000,
                _ => 0,
            };
            if curr > prev {
                result += curr - 2 * prev;
            } else {
                result += curr;
            }
            prev = curr;
        }
        result
    }
}
// @lc code=end
