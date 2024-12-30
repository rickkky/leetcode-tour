/*
 * @lc app=leetcode.cn id=26 lang=rust
 *
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/
 */

pub struct Solution;

// @lc code=start
impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        if nums.len() == 0 {
            return 0;
        }
        let mut i = 0;
        let mut j = 1;
        while j < nums.len() {
            if nums[i] != nums[j] {
                i += 1;
                nums[i] = nums[j];
            }
            j += 1;
        }
        (i + 1) as i32
    }
}
// @lc code=end
