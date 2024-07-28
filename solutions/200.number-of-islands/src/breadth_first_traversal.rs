/*
 * @lc app=leetcode.cn id=200 lang=rust
 *
 * https://leetcode.cn/problems/number-of-islands/
 */

pub struct Solution;

// @lc code=start
use std::collections::VecDeque;

impl Solution {
    pub fn num_islands(mut grid: Vec<Vec<char>>) -> i32 {
        let rows = grid.len();
        let cols = grid[0].len();
        let mut queue = VecDeque::new();
        let mut count = 0;
        for i in 0..rows {
            for j in 0..cols {
                if grid[i][j] == '0' {
                    continue;
                }
                queue.push_back((i, j));
                grid[i][j] = '0';
                while !queue.is_empty() {
                    let (i, j) = queue.pop_front().unwrap();
                    if i > 0 && grid[i - 1][j] == '1' {
                        queue.push_back((i - 1, j));
                        grid[i - 1][j] = '0';
                    }
                    if i < rows - 1 && grid[i + 1][j] == '1' {
                        queue.push_back((i + 1, j));
                        grid[i + 1][j] = '0';
                    }
                    if j > 0 && grid[i][j - 1] == '1' {
                        queue.push_back((i, j - 1));
                        grid[i][j - 1] = '0';
                    }
                    if j < cols - 1 && grid[i][j + 1] == '1' {
                        queue.push_back((i, j + 1));
                        grid[i][j + 1] = '0';
                    }
                }
                count += 1;
            }
        }
        count
    }
}
// @lc code=end
