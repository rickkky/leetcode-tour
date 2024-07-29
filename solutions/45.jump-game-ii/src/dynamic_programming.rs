/*
 * @lc app=leetcode.cn id=45 lang=rust
 *
 * https://leetcode.cn/problems/jump-game-ii/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn jump(nums: Vec<i32>) -> i32 {
        let mut times = vec![0; nums.len()];
        for i in 0..nums.len() {
            for j in (i..=i + nums[i] as usize).skip(1) {
                if j >= nums.len() {
                    break;
                }
                if times[j] == 0 {
                    times[j] = times[i] + 1;
                }
                if j == nums.len() - 1 {
                    return times[j];
                }
            }
        }
        times[nums.len() - 1]
    }
}
// @lc code=end
