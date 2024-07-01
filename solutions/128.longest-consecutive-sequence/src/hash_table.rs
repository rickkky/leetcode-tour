/*
 * @lc app=leetcode.cn id=128 lang=rust
 *
 * https://leetcode.cn/problems/longest-consecutive-sequence/
 */

pub struct Solution;

// @lc code=start
use std::collections::HashSet;

impl Solution {
    pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
        let set: HashSet<i32> = nums.into_iter().collect();
        let mut max_len = 0;
        for &num in set.iter() {
            if set.contains(&(num - 1)) {
                continue;
            }
            let mut cur_len = 1;
            let mut cur_num = num;
            while set.contains(&(cur_num + 1)) {
                cur_len += 1;
                cur_num += 1;
            }
            max_len = max_len.max(cur_len);
        }
        max_len
    }
}
// @lc code=end
