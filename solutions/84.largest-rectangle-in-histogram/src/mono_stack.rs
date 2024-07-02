/*
 * @lc app=leetcode.cn id=84 lang=rust
 *
 * https://leetcode.cn/problems/largest-rectangle-in-histogram/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn largest_rectangle_area(heights: Vec<i32>) -> i32 {
        let mut stack = Vec::new();
        let mut max_area = 0;
        for (i, &h) in heights.iter().enumerate() {
            while let Some(&top) = stack.last() {
                if h < heights[top] {
                    let top = stack.pop().unwrap();
                    let left = stack.last().map(|&x| x + 1).unwrap_or(0);
                    max_area = max_area.max((i - left) as i32 * heights[top]);
                } else {
                    break;
                }
            }
            stack.push(i);
        }
        let n = heights.len();
        while let Some(top) = stack.pop() {
            let left = stack.last().map(|&x| x + 1).unwrap_or(0);
            max_area = max_area.max((n - left) as i32 * heights[top]);
        }
        max_area
    }
}
// @lc code=end
