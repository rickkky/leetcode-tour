/*
 * @lc app=leetcode.cn id=78 lang=rust
 *
 * https://leetcode.cn/problems/subsets/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    fn depth_first_travel(
        nums: &Vec<i32>,
        curr: usize,
        sub: &mut Vec<i32>,
        result: &mut Vec<Vec<i32>>,
    ) {
        if curr == nums.len() {
            result.push(sub.clone());
            return;
        }
        Self::depth_first_travel(nums, curr + 1, sub, result);
        sub.push(nums[curr]);
        Self::depth_first_travel(nums, curr + 1, sub, result);
        sub.pop();
    }

    pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = Vec::new();
        let mut sub = Vec::new();
        Self::depth_first_travel(&nums, 0, &mut sub, &mut result);
        result
    }
}
// @lc code=end
