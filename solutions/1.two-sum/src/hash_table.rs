/*
 * @lc app=leetcode.cn id=1 lang=rust
 *
 * https://leetcode-cn.com/problems/two-sum
 */

use std::collections::HashMap;

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map = HashMap::new();
        for (i, num) in nums.iter().enumerate() {
            let diff = target - num;
            if let Some(j) = map.get(&diff) {
                return vec![*j as i32, i as i32];
            }
            map.insert(num, i);
        }
        vec![]
    }
}
// @lc code=end
