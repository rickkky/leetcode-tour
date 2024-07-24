/*
 * @lc app=leetcode.cn id=90 lang=rust
 *
 * https://leetcode.cn/problems/subsets-ii/
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
        let mut next = curr + 1;
        while next < nums.len() && nums[next as usize] == nums[curr as usize] {
            next += 1;
        }
        Solution::depth_first_travel(nums, next, sub, result);
        sub.push(nums[curr]);
        Solution::depth_first_travel(nums, curr + 1, sub, result);
        sub.pop();
    }

    pub fn subsets_with_dup(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        nums.sort_unstable();
        let mut sub = vec![];
        let mut result = vec![];
        Solution::depth_first_travel(&nums, 0, &mut sub, &mut result);
        result
    }
}
// @lc code=end
