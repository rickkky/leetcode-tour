/*
 * @lc app=leetcode.cn id=90 lang=rust
 *
 * https://leetcode.cn/problems/subsets-ii/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    fn backtrack(nums: &Vec<i32>, curr: usize, seq: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
        if curr == nums.len() {
            result.push(seq.clone());
            return;
        }
        let mut next = curr + 1;
        while next < nums.len() && nums[next as usize] == nums[curr as usize] {
            next += 1;
        }
        Solution::backtrack(nums, next, seq, result);
        seq.push(nums[curr]);
        Solution::backtrack(nums, curr + 1, seq, result);
        seq.pop();
    }

    pub fn subsets_with_dup(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        nums.sort_unstable();
        let mut result = vec![];
        Solution::backtrack(&nums, 0, &mut vec![], &mut result);
        result
    }
}
// @lc code=end
