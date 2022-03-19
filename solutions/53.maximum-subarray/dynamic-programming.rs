/*
 * @lc app=leetcode.cn id=53 lang=rust
 *
 * https://leetcode-cn.com/problems/maximum-subarray
 */

// @lc code=start
impl Solution {
  pub fn max_sub_array(nums: Vec<i32>) -> i32 {
    let mut max_sum = nums[0];
    let mut sum = nums[0];
    for i in 1..nums.len() {
      sum = if sum < 0 { nums[i] } else { sum + nums[i] };
      max_sum = if sum > max_sum { sum } else { max_sum };
    }
    max_sum
  }
}
// @lc code=end

