/*
 * @lc app=leetcode.cn id=13 lang=rust
 *
 * https://leetcode-cn.com/problems/roman-to-integer
 */

// @lc code=start
impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        let mut result = 0;
        let mut last = 0;
        for c in s.chars() {
            let current = match c {
                'I' => 1,
                'V' => 5,
                'X' => 10,
                'L' => 50,
                'C' => 100,
                'D' => 500,
                'M' => 1000,
                _ => 0,
            };
            if current > last {
                result += current - 2 * last;
            } else {
                result += current;
            }
            last = current;
        }
        result
    }
}
// @lc code=end
