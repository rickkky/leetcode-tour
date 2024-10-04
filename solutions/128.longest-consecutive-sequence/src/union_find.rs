/*
 * @lc app=leetcode.cn id=128 lang=rust
 *
 * https://leetcode.cn/problems/longest-consecutive-sequence/
 */

pub struct Solution;

// @lc code=start
use std::collections::HashMap;

struct UnionFind {
    parent: Vec<usize>,

    rank: Vec<usize>,
}

impl UnionFind {
    fn new(n: usize) -> Self {
        UnionFind {
            parent: (0..n).collect(),
            rank: vec![1; n],
        }
    }

    fn find(&mut self, x: usize) -> usize {
        if self.parent[x] != x {
            self.parent[x] = self.find(self.parent[x]);
        }
        self.parent[x]
    }

    fn union(&mut self, x: usize, y: usize) {
        let root_x = self.find(x);
        let root_y = self.find(y);
        if root_x == root_y {
            return;
        }
        if self.rank[root_x] > self.rank[root_y] {
            self.parent[root_y] = root_x;
            self.rank[root_x] += self.rank[root_y];
        } else {
            self.parent[root_x] = root_y;
            self.rank[root_y] += self.rank[root_x];
        }
    }

    fn max_rank(&self) -> usize {
        if let Some(&max) = self.rank.iter().max() {
            max
        } else {
            0
        }
    }
}

impl Solution {
    pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
        let mut map: HashMap<i32, usize> = HashMap::new();
        let mut union_find = UnionFind::new(nums.len());
        for (i, &num) in nums.iter().enumerate() {
            if map.contains_key(&num) {
                continue;
            }
            map.insert(num, i);
            if map.contains_key(&(num - 1)) {
                union_find.union(i, map[&(num - 1)]);
            }
            if map.contains_key(&(num + 1)) {
                union_find.union(i, map[&(num + 1)]);
            }
        }
        union_find.max_rank() as i32
    }
}
// @lc code=end
