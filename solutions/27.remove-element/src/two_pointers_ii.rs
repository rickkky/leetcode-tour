/*
 * @lc app=leetcode.cn id=27 lang=rust
 *
 * https://leetcode.cn/problems/remove-element/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut left = 0;
        let mut right = nums.len();
        while left < right {
            if nums[left] == val {
                nums[left] = nums[right - 1];
                right -= 1;
            } else {
                left += 1;
            }
        }
        left as i32
    }
}
// @lc code=end
