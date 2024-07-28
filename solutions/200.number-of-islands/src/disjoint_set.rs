/*
 * @lc app=leetcode.cn id=200 lang=rust
 *
 * https://leetcode.cn/problems/number-of-islands/
 */

pub struct Solution;

// @lc code=start
struct DisjointSet {
    parent: Vec<usize>,

    count: i32,
}

impl DisjointSet {
    pub fn new(grid: &Vec<Vec<char>>) -> Self {
        let rows = grid.len();
        let cols = grid[0].len();
        let mut parent = Vec::with_capacity(rows * cols);
        let mut count = 0;
        for i in 0..rows {
            for j in 0..cols {
                parent.push(i * cols + j);
                if grid[i][j] == '1' {
                    count += 1;
                }
            }
        }
        DisjointSet { parent, count }
    }

    pub fn find(&mut self, x: usize) -> usize {
        if self.parent[x] != x {
            self.parent[x] = self.find(self.parent[x]);
        }
        self.parent[x]
    }

    pub fn union(&mut self, x: usize, y: usize) {
        let parent_x = self.find(x);
        let parent_y = self.find(y);
        if parent_x == parent_y {
            return;
        }
        self.parent[parent_y] = parent_x;
        self.count -= 1;
    }

    pub fn get_count(&self) -> i32 {
        self.count
    }
}

impl Solution {
    pub fn num_islands(grid: Vec<Vec<char>>) -> i32 {
        let rows = grid.len();
        let cols = grid[0].len();
        let mut set = DisjointSet::new(&grid);
        for i in 0..rows {
            for j in 0..cols {
                if grid[i][j] == '0' {
                    continue;
                }
                if i + 1 < rows && grid[i + 1][j] == '1' {
                    set.union(i * cols + j, (i + 1) * cols + j);
                }
                if j + 1 < cols && grid[i][j + 1] == '1' {
                    set.union(i * cols + j, i * cols + j + 1);
                }
            }
        }
        set.get_count()
    }
}
// @lc code=end
