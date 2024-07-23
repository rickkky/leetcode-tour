/*
 * @lc app=leetcode.cn id=78 lang=rust
 *
 * https://leetcode.cn/problems/subsets/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn subsets(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = vec![vec![]];
        for num in nums {
            for i in 0..result.len() {
                let mut sub = result[i].clone();
                sub.push(num);
                result.push(sub);
            }
        }
        result
    }
}
// @lc code=end
