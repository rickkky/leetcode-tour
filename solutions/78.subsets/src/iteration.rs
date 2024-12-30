/*
 * @lc app=leetcode.cn id=78 lang=rust
 *
 * https://leetcode.cn/problems/subsets/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = vec![];
        for mask in 0..1 << nums.len() {
            let mut sub = vec![];
            for i in 0..nums.len() {
                if mask & (1 << i) == 0 {
                    continue;
                }
                sub.push(nums[i]);
            }
            result.push(sub);
        }
        result
    }
}
// @lc code=end
