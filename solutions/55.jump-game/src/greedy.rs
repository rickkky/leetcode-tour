/*
 * @lc app=leetcode.cn id=55 lang=rust
 *
 * https://leetcode.cn/problems/jump-game/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn can_jump(nums: Vec<i32>) -> bool {
        let mut farmost = 0;
        for i in 0..nums.len() {
            if i > farmost {
                return false;
            }
            farmost = farmost.max(i + nums[i] as usize);
        }
        true
    }
}
// @lc code=end
