/*
 * @lc app=leetcode.cn id=200 lang=rust
 *
 * https://leetcode.cn/problems/number-of-islands/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn depth_first_travel(grid: &mut Vec<Vec<char>>, i: usize, j: usize) {
        let rows = grid.len();
        let cols = grid[0].len();
        if !(0..rows).contains(&i) || !(0..cols).contains(&j) || grid[i][j] == '0' {
            return;
        }
        grid[i][j] = '0';
        Self::depth_first_travel(grid, i - 1, j);
        Self::depth_first_travel(grid, i + 1, j);
        Self::depth_first_travel(grid, i, j - 1);
        Self::depth_first_travel(grid, i, j + 1);
    }

    pub fn num_islands(mut grid: Vec<Vec<char>>) -> i32 {
        let rows = grid.len();
        let cols = grid[0].len();
        let mut count = 0;
        for i in 0..rows {
            for j in 0..cols {
                if grid[i][j] == '0' {
                    continue;
                }
                Self::depth_first_travel(&mut grid, i, j);
                count += 1;
            }
        }
        count
    }
}
// @lc code=end
