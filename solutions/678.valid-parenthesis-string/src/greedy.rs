/*
 * @lc app=leetcode.cn id=678 lang=rust
 *
 * https://leetcode.cn/problems/valid-parenthesis-string/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn check_valid_string(s: String) -> bool {
        let mut unpaired_min: i32 = 0;
        let mut unpaired_max: i32 = 0;
        for c in s.chars() {
            match c {
                '(' => {
                    unpaired_min += 1;
                    unpaired_max += 1;
                }
                ')' => {
                    unpaired_min = (unpaired_min - 1).max(0);
                    unpaired_max -= 1;
                }
                '*' => {
                    unpaired_min = (unpaired_min - 1).max(0);
                    unpaired_max += 1;
                }
                _ => unreachable!(),
            }
            if unpaired_max < 0 {
                return false;
            }
        }
        unpaired_min == 0
    }
}
// @lc code=end
