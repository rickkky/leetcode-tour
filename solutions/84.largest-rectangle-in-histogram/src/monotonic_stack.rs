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
        let mut stack = vec![];
        let mut max_area = 0;
        for (i, &h) in heights.iter().enumerate() {
            // Pop the stack until the top-index height is less than the current height.
            while let Some(&j) = stack.last() {
                if h > heights[j] {
                    break;
                }
                stack.pop();
                let k = stack.last().map_or(-1, |&k| k as i32);
                max_area = max_area.max((i as i32 - k - 1) * heights[j]);
            }
            stack.push(i);
        }
        while let Some(j) = stack.pop() {
            let k = stack.last().map_or(-1, |&k| k as i32);
            max_area = max_area.max((heights.len() as i32 - k - 1) * heights[j]);
        }
        max_area
    }
}
// @lc code=end
