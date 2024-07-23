/*
 * @lc app=leetcode.cn id=45 lang=rust
 *
 * https://leetcode.cn/problems/jump-game-ii/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn jump(nums: Vec<i32>) -> i32 {
        let mut farmost: i32 = 0;
        let mut next_farmost = 0;
        let mut steps = 0;
        for i in 0..nums.len() - 1 {
            next_farmost = next_farmost.max(i as i32 + nums[i]);
            if i as i32 == farmost {
                farmost = next_farmost;
                steps += 1;
            }
        }
        steps
    }
}
// @lc code=end
