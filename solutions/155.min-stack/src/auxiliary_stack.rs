/*
 * @lc app=leetcode.cn id=155 lang=rust
 *
 * https://leetcode.cn/problems/min-stack/
 */

// @lc code=start
pub struct MinStack {
    data: Vec<i32>,

    min_data: Vec<i32>,
}

impl MinStack {
    pub fn new() -> Self {
        MinStack {
            data: vec![],
            min_data: vec![],
        }
    }

    pub fn push(&mut self, x: i32) {
        self.data.push(x);
        self.min_data
            .push(self.min_data.last().map_or(x, |&v| v.min(x)));
    }

    pub fn pop(&mut self) {
        self.data.pop();
        self.min_data.pop();
    }

    pub fn top(&self) -> i32 {
        *self.data.last().unwrap()
    }

    pub fn get_min(&self) -> i32 {
        *self.min_data.last().unwrap()
    }
}
// @lc code=end
