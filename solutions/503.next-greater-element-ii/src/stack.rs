/*
 * @lc app=leetcode.cn id=503 lang=rust
 *
 * https://leetcode.cn/problems/next-greater-element-ii/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn next_greater_elements(nums: Vec<i32>) -> Vec<i32> {
        let mut result = vec![-1; nums.len()];
        let mut stack = vec![];
        'outer: for i in 0..2 * nums.len() - 1 {
            let j = i % nums.len();
            while let Some(&k) = stack.last() {
                if j == k {
                    break 'outer;
                }
                if nums[j] <= nums[k] {
                    break;
                }
                stack.pop();
                result[k] = nums[j];
            }
            if result[j] == -1 {
                stack.push(j);
            }
        }
        result
    }
}
// @lc code=end
