/*
 * @lc app=leetcode.cn id=90 lang=rust
 *
 * https://leetcode.cn/problems/subsets-ii/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn subsets_with_dup(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        nums.sort_unstable();
        let mut result = vec![];
        for mask in 0..1 << nums.len() {
            let mut sub = vec![];
            let mut duplicated = false;
            for i in 0..nums.len() {
                if mask & 1 << i == 0 {
                    continue;
                }
                if i > 0 && nums[i - 1] == nums[i] && mask & 1 << i - 1 == 0 {
                    duplicated = true;
                    break;
                }
                sub.push(nums[i]);
            }
            if !duplicated {
                result.push(sub);
            }
        }
        result
    }
}
// @lc code=end
