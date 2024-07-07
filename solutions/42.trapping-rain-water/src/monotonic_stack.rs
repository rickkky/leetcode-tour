/*
 * @lc app=leetcode.cn id=42 lang=rust
 *
 * https://leetcode.cn/problems/trapping-rain-water/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn trap(heights: Vec<i32>) -> i32 {
        let mut stack = Vec::new();
        let mut trapped = 0;
        for (i, &h) in heights.iter().enumerate() {
            while let Some(&j) = stack.last() {
                if h < heights[j] {
                    break;
                }
                stack.pop();
                if let Some(&k) = stack.last() {
                    trapped += (i - k - 1) as i32 * (h.min(heights[k]) - heights[j]);
                }
            }
            stack.push(i);
        }
        trapped
    }
}
// @lc code=end
