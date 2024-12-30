/*
 * @lc app=leetcode.cn id=35 lang=rust
 *
 * https://leetcode.cn/problems/search-insert-position/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        let mut left = 0;
        let mut right = nums.len() as i32 - 1;
        while left <= right {
            let mid = (left + right) / 2;
            let x = nums[mid as usize];
            if x < target {
                left = mid + 1;
            } else if x > target {
                right = mid - 1;
            } else {
                return mid;
            }
        }
        left
    }
}
// @lc code=end
