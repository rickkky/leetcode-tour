/*
 * @lc app=leetcode.cn id=78 lang=rust
 *
 * https://leetcode.cn/problems/subsets/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    fn backtrack(nums: &Vec<i32>, curr: usize, seq: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
        if curr == nums.len() {
            result.push(seq.clone());
            return;
        }
        Self::backtrack(nums, curr + 1, seq, result);
        seq.push(nums[curr]);
        Self::backtrack(nums, curr + 1, seq, result);
        seq.pop();
    }

    pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = vec![];
        Self::backtrack(&nums, 0, &mut vec![], &mut result);
        result
    }
}
// @lc code=end
