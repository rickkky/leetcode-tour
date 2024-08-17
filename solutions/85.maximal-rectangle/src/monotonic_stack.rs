/*
 * @lc app=leetcode.cn id=85 lang=rust
 *
 * https://leetcode.cn/problems/maximal-rectangle/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    fn largeset_rectangle_in_histogram(heights: Vec<i32>) -> i32 {
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

    pub fn maximal_rectangle(matrix: Vec<Vec<char>>) -> i32 {
        let rows = matrix.len();
        if rows == 0 {
            return 0;
        }
        let cols = matrix[0].len();
        let mut heights_2d = vec![vec![0; cols]; rows];
        for i in 0..rows {
            for j in 0..cols {
                if matrix[i][j] == '1' {
                    heights_2d[i][j] = if i == 0 { 1 } else { heights_2d[i - 1][j] + 1 };
                }
            }
        }
        let mut max_area = 0;
        for heights in heights_2d {
            max_area = max_area.max(Self::largeset_rectangle_in_histogram(heights));
        }
        max_area
    }
}
// @lc code=end
