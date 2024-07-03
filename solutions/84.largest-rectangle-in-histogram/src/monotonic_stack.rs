/*
 * @lc app=leetcode.cn id=84 lang=rust
 *
 * https://leetcode.cn/problems/largest-rectangle-in-histogram/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn largest_rectangle_area(heights: Vec<i32>) -> i32 {
        // A monotonic stack to store the index of the height.
        let mut stack: Vec<i32> = Vec::new();
        let mut max_area = 0;
        for (i, &h) in heights.iter().enumerate() {
            // Pop the stack until the top-index height is less than the current height.
            while stack.len() > 0 {
                let &j = stack.last().unwrap();
                if heights[j as usize] < h {
                    break;
                }
                stack.pop();
                let k = if stack.len() == 0 {
                    -1
                } else {
                    stack.last().unwrap().clone() as i32
                };
                max_area = max_area.max((i as i32 - k - 1) * heights[j as usize]);
            }
            stack.push(i as i32);
        }
        let n = heights.len();
        while stack.len() > 0 {
            let j = stack.pop().unwrap();
            let k = if stack.len() == 0 {
                -1
            } else {
                stack.last().unwrap().clone() as i32
            };
            max_area = max_area.max((n as i32 - k - 1) * heights[j as usize]);
        }
        max_area
    }
}
// @lc code=end
