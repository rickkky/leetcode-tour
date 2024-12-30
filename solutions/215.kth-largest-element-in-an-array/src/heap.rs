/*
 * @lc app=leetcode.cn id=215 lang=rust
 *
 * https://leetcode.cn/problems/kth-largest-element-in-an-array/
 */

pub struct Solution;

// @lc code=start
use std::collections::BinaryHeap;

impl Solution {
    pub fn find_kth_largest(nums: Vec<i32>, k: i32) -> i32 {
        let mut heap = BinaryHeap::from(nums);
        for _ in 1..k {
            heap.pop();
        }
        *heap.peek().unwrap()
    }
}
// @lc code=end
